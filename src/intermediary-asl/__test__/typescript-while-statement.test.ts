import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting while look to iasl", () => {
  it("then native integrations get converted", () => {
    const code = `
    asl.typescriptWhile({
      condition: () => code === 'continue',
      block: () => { asl.wait({ seconds: 1 }); asl.wait({ seconds: 2 }); }
  })`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "while",
          "condition": Object {
            "_syntaxKind": "binary-expression",
            "lhs": Object {
              "_syntaxKind": "identifier",
              "identifier": "code",
            },
            "operator": "eq",
            "rhs": Object {
              "_syntaxKind": "literal",
              "type": "string",
              "value": "continue",
            },
          },
          "while": Object {
            "expressions": Array [
              Object {
                "_syntaxKind": "asl-wait-state",
                "seconds": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 1,
                },
              },
              Object {
                "_syntaxKind": "asl-wait-state",
                "seconds": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 2,
                },
              },
            ],
          },
        },
      ]
    `);
  });
});
