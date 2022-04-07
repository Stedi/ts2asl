import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    const arr = asl.pass({
        name: "Assign arr",
        parameters: () => [1, 2, 3],
        comment: "arr = [1, 2, 3]"
    });
    asl.typescriptForeach({
        name: "For item Of arr",
        items: () => arr,
        iterator: item => {
            asl.pass({
                name: "Log (item)",
                parameters: () => item,
                comment: "console.log(item)"
            });
        }
    })
    asl.pass({
        name: "Log (\"done\")",
        parameters: () => "done",
        comment: "console.log(\"done\")"
    });
});

export const foreachWithBreak = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {
  const arr = [1, 2, 3]
  for (const item of arr) {
    if (item === 1) { break; }
    console.log(item);
  }
  console.log("done");
});