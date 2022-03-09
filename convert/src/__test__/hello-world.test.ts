import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("hello-world");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@ts2asl/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (input: IInput) =>{
          asl.typescriptIf({
              name: \\"4: If (typeof input.name !== ...\\",
              condition: () => typeof input.name !== \\"string\\",
              then: async () => {
                  input.name = \\"World\\";
              },
              comment: \\"if (typeof input.name !== \\\\\\"string\\\\\\") {\\\\n    input.name = \\\\\\"World\\\\\\";\\\\n  }\\"
          })
          const rnd = asl.typescriptInvoke({
              name: \\"8: random()\\",
              resource: random,
              comment: \\"random()\\"
          });
          return {
              greeting: asl.states.format(\\"Hello {}\\", input.name),
              luckyNumber: rnd
          };
      });

      export const random = asl.deploy.asLambda(async (input: { min?: number; max?: number } = {}) => {
        const min = input.min ?? 0;
        const max = input.max ?? 100;
        return Math.round(Math.random() * (max - min) + min);
      });

      interface IInput {
        name: string;
      }
      "
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "input",
        },
        "statements": Array [
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "operator": "not",
              "rhs": Object {
                "_syntaxKind": "binary-expression",
                "lhs": Object {
                  "_syntaxKind": "type-of-expression",
                  "operand": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "input.name",
                    "type": "string",
                  },
                },
                "operator": "eq",
                "rhs": Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "string",
                },
              },
            },
            "source": "if (typeof input.name !== \\"string\\") {
          input.name = \\"World\\";
        }",
            "stateName": "4: If (typeof input.name !== ...",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "variable-assignment",
                  "expression": Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "World",
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "input.name",
                    "type": "string",
                  },
                  "stateName": "5: Assign input.name",
                },
              ],
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-task-state",
              "parameters": undefined,
              "resource": "typescript:random",
              "source": "random()",
              "stateName": "8: random()",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "rnd",
              "type": "numeric",
            },
            "stateName": "7: Assign rnd",
          },
          Object {
            "_syntaxKind": "return",
            "expression": Object {
              "_syntaxKind": "literal-object",
              "properties": Object {
                "greeting": Object {
                  "_syntaxKind": "asl-intrinsic-function",
                  "arguments": Array [
                    Object {
                      "_syntaxKind": "literal",
                      "type": "string",
                      "value": "Hello {}",
                    },
                    Object {
                      "_syntaxKind": "identifier",
                      "identifier": "input.name",
                      "type": "string",
                    },
                  ],
                  "function": "asl.states.format",
                },
                "luckyNumber": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "rnd",
                  "type": "numeric",
                },
              },
            },
            "stateName": "8: Return { greeting: as ...",
          },
        ],
      }
    `);
  });
  it("then can be converted to asl", async () => {
    expect(converted.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "4: If (typeof input.name !== ...": Object {
            "Choices": Array [
              Object {
                "Next": "5: Assign input.name",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.name",
                    },
                    Object {
                      "IsString": true,
                      "Variable": "$.vars.name",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.name !== \\"string\\") { input.na ...",
            "Default": "8: random()",
            "Type": "Choice",
          },
          "5: Assign input.name": Object {
            "Comment": undefined,
            "Next": "8: random()",
            "Result": "World",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "8: random()": Object {
            "Catch": undefined,
            "Comment": "source: random()",
            "HeartbeatSeconds": undefined,
            "Next": "Pass",
            "Resource": "typescript:random",
            "ResultPath": "$.vars.rnd",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Initialize": Object {
            "Next": "4: If (typeof input.name !== ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "End": true,
            "Parameters": Object {
              "greeting.$": "States.Format('Hello {}', $.vars.name)",
              "luckyNumber.$": "$.vars.rnd",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
