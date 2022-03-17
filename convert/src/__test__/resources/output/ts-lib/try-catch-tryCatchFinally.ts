
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return [""] });

export const simpleTry = asl.deploy.asStateMachine(async () => {
  try {
    const withoutTryCatch = lambda();
  } catch {
    console.log("it failed")
  }
});
export const simpleMultipleStatements = asl.deploy.asStateMachine(async () => {
  try {
    const withoutTryCatch = lambda();
    console.log("it succeeded");
  } catch {
    console.log("it failed");
  }
});
export const tryAroundPassState = asl.deploy.asStateMachine(async () => {
  try {
    console.log("this cannot fail");
  } catch {
    console.log("this never happens");
  }
});
export const tryFinally = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
  } finally {
    console.log("finally")
  }
});
export const tryCatchFinally = asl.deploy.asStateMachine(async () =>{
    asl.typescriptTry({
        name: "Try Catch Finally",
        try: async () => {
            asl.typescriptInvoke({
                name: "lambda()",
                resource: lambda,
                comment: "lambda()"
            });
        },
        catch: [
            {
                errorFilter: [
                    "States.All"
                ],
                block: () => {
                    asl.pass({
                        parameters: () => "failed",
                        comment: "console.log(\"failed\")"
                    });
                }
            }
        ],
        finally: async () => {
            asl.pass({
                parameters: () => "finally",
                comment: "console.log(\"finally\")"
            });
        },
        comment: "try {\n    lambda();\n  } catch {\n    console.log(\"failed\")\n  } finally {\n    console.log(\"finally\")\n  }"
    })
});

