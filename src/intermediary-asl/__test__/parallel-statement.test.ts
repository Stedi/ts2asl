import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `await asl.parallel({
      branches: [
          () => { asl.succeed() },
          () => { asl.fail() }
      ],
  });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "asl-parallel-state",
          "branches": Array [
            Object {
              "expressions": Array [
                Object {
                  "_syntaxKind": "asl-succeed-state",
                },
              ],
            },
            Object {
              "expressions": Array [
                Object {
                  "_syntaxKind": "asl-fail-state",
                },
              ],
            },
          ],
          "catch": Array [],
          "retry": Array [],
        },
      ]
    `);
  });
});
