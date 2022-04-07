
import * as iasl from "../convert-asllib-to-iasl/ast"
import * as asl from "asl-types";
import { Scopes } from "./scopes";
import { AslWriter } from "./asl-writer";
import { AslFactory } from "./aslfactory";

interface BlockResult { state: asl.State, stateName?: string, secondState?: asl.State, secondStateName?: string };

export const createSingleOrParallel = (block: iasl.Block, scopes: Scopes, context: AslWriter, options: { alwaysWrapFailState?: true } = {}): BlockResult => {
  const stateMachine = convertBlock(block, scopes, context.createChildContext())
  if (!stateMachine) throw new Error("unable to convert block to state machine");

  const stateNames = Object.keys(stateMachine.States);
  if (stateNames.length === 1) {
    const stateName = stateNames[0];
    const state = stateMachine.States[stateName];
    if (state.Type !== "Fail" || !options.alwaysWrapFailState) {
      if ("ResultPath" in state) {
        delete (state as any).End;
      }
      context.root.names = context.root.names.filter(x => x != stateName);
      return { state, stateName };
    }
  }

  const result = {
    state: {
      Type: "Parallel",
      ResultPath: "$.vars",
      Parameters: { "vars.$": "$.vars" },
      Branches: [stateMachine],
    } as asl.Parallel
  } as BlockResult;

  if (Object.values(stateMachine.States).find(x => x.Type === "Pass" && !("ResultPath" in x))) {
    // return
    result.secondState = {
      Type: "Pass",
      InputPath: "$.vars[0]"
    };
    result.secondStateName = "Return From Scope";
  } else {
    result.secondState = {
      Type: "Pass",
      ResultPath: "$.vars",
      InputPath: "$.vars[0]"
    };
    result.secondStateName = "Assign vars";
  }
  return result
}


export const convertBlock = (stateMachine: iasl.Block, scopes: Record<string, iasl.Scope>, context: AslWriter = new AslWriter()): asl.StateMachine | undefined => {
  const { statements } = stateMachine;
  for (const statement of statements) {
    AslFactory.append(statement, scopes, context);
  }
  return context.finalize();
}