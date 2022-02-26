import { testTransform } from "./test-transform";
import { transformers } from "../transformers";

describe("when converting source files", () => {
  it("then can convert nested structures", () => {
    const code = `
  let completedActions: string[] = [];
  let getActionsArgs = { targetState: desiredStateTemplate, completedActions };
  let remainingActions = await getNextActions(getNextActionsArg);
  while (remainingActions.length !== 0) {
    const results = await performAction(getActionsArgs);
    if (results[0].status === "failed") {
      throw new Error("task failed")
    }
    if (results[0].status !== "failed") {
      remainingActions = await getNextActions(getActionsArgs);
    }
  }
      `;
    const output = testTransform(code, transformers);

    expect(output).toMatchInlineSnapshot(`
      "let completedActions: string[] = asl.pass({
          parameters: () => [],
          comment: \\"completedActions: string[] = []\\"
      });
      let getActionsArgs = asl.pass({
          parameters: () => ({ targetState: desiredStateTemplate, completedActions }),
          comment: \\"getActionsArgs = { targetState: desiredStateTemplate, completedActions }\\"
      });
      let remainingActions = await asl.typescriptInvoke({
          target: getNextActions,
          parameters: () => getNextActionsArg,
          comment: \\"getNextActions(getNextActionsArg)\\"
      });
      asl.typescriptWhile({
          name: \\"While (remainingActions.l ...\\",
          condition: () => remainingActions.length !== 0,
          block: async () => {
              const results = await asl.typescriptInvoke({
                  target: performAction,
                  parameters: () => getActionsArgs,
                  comment: \\"performAction(getActionsArgs)\\"
              });
              asl.typescriptIf({
                  name: \\"If (results[0].status === ...\\",
                  condition: () => results[0].status === \\"failed\\",
                  then: async () => {
                      asl.fail({
                          name: \\"Throw Error\\",
                          error: \\"Error\\",
                          cause: \\"task failed\\",
                          comment: \\"throw new Error(\\\\\\"task failed\\\\\\")\\"
                      })
                  },
                  comment: \\"if (results[0].status === \\\\\\"failed\\\\\\") {\\\\n      throw new Error(\\\\\\"task failed\\\\\\")\\\\n    }\\"
              })
              asl.typescriptIf({
                  name: \\"If (results[0].status !== ...\\",
                  condition: () => results[0].status !== \\"failed\\",
                  then: async () => {
                      remainingActions = await asl.typescriptInvoke({
                          target: getNextActions,
                          parameters: () => getActionsArgs,
                          comment: \\"getNextActions(getActionsArgs)\\"
                      });
                  },
                  comment: \\"if (results[0].status !== \\\\\\"failed\\\\\\") {\\\\n      remainingActions = await getNextActions(getActionsArgs);\\\\n    }\\"
              })
          }
      })"
    `);
  });
  it("then can convert ASL Lib syntax", () => {
    const code = `
        let page = await ASL.Task({ Resource: "arn:aws:states:::apigateway:invoke" });
        while (page.nextPageToken) {
            await ASL.Wait({ Seconds: 2 });
            page = await ASL.Task({ Resource: "arn:aws:states:::apigateway:invoke" });
        }
            `;
    const output = testTransform(code, transformers);
    expect(output).toMatchInlineSnapshot(`
      "let page = await ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" });
      asl.typescriptWhile({
          name: \\"While (page.nextPageToken)\\",
          condition: () => page.nextPageToken,
          block: async () => {
              await ASL.Wait({ Seconds: 2 });
              page = await ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" });
          },
          comment: \\"while (page.nextPageToken) {\\\\n            await ASL.Wait({ Seconds: 2 });\\\\n            page = await ASL.Task({ Resource: \\\\\\"arn:aws:states:::apigateway:invoke\\\\\\" });\\\\n        }\\"
      })"
    `);
  });
});
