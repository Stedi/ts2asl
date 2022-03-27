import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting binary expressions to iasl", () => {
  it("then identifier becomes truthy check", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.choice({ 
        choices: [
          { condition: a, block: () => { asl.pass({ result: "abc"}); } }
        ],
        default: () => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-choice-state",
            "choices": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-pass-state",
                    },
                  ],
                },
                "condition": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "is-truthy",
                  "rhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "a",
                    "type": "unknown",
                  },
                },
              },
            ],
            "default": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
                  "stateName": "Return",
                },
              ],
            },
          },
        ],
      }
    `);
  });

  it("then !(identifier) access becomes !truthy check", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.choice({ 
        choices: [
          { condition: !a, block: () => { asl.pass({ result: "abc"}); } }
        ],
        default: () => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-choice-state",
            "choices": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-pass-state",
                    },
                  ],
                },
                "condition": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "not",
                  "rhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "a",
                    "type": "unknown",
                  },
                },
              },
            ],
            "default": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
                  "stateName": "Return",
                },
              ],
            },
          },
        ],
      }
    `);
  });

  it("then !!(identifier) access becomes truthy check", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.choice({ 
        choices: [
          { condition: !!a, block: () => { asl.pass({ result: "abc"}); } }
        ],
        default: () => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-choice-state",
            "choices": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-pass-state",
                    },
                  ],
                },
                "condition": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "not",
                  "rhs": Object {
                    "_syntaxKind": "binary-expression",
                    "operator": "not",
                    "rhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "a",
                      "type": "unknown",
                    },
                  },
                },
              },
            ],
            "default": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
                  "stateName": "Return",
                },
              ],
            },
          },
        ],
      }
    `);
  });

  it.only("then numeric comparison retains type", () => {
    const code = `
      const condition = 42;
      const items = [2, 42, 3];
      const listWithRetunrned = items.map(item => {
        if (item === condition) {
          return { returned : item };
        }
      });
      const item = listWithRetunrned.filter(x=>x.returned);
      return item;
    `;
    const transformed = testTransform(code, createTransformers({}));
    const result = testConvertToIntermediaryAst(transformed);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal",
                "type": "numeric",
                "value": 42,
              },
              "source": "condition = 42",
              "stateName": "Assign condition",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "condition",
              "type": "unknown",
            },
            "stateName": "Assign condition",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-array",
                "elements": Array [
                  Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 2,
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 42,
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 3,
                  },
                ],
              },
              "source": "items = [2, 42, 3]",
              "stateName": "Assign items",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "items",
              "type": "unknown",
            },
            "stateName": "Assign items",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": undefined,
              "items": Object {
                "_syntaxKind": "identifier",
                "identifier": "items",
                "type": "unknown",
              },
              "iterator": Object {
                "_syntaxKind": "function",
                "inputArgumentName": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "item",
                },
                "statements": Array [
                  Object {
                    "_syntaxKind": "if",
                    "condition": Object {
                      "_syntaxKind": "binary-expression",
                      "lhs": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "item",
                        "type": "unknown",
                      },
                      "operator": "eq",
                      "rhs": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "condition",
                        "type": "unknown",
                      },
                    },
                    "source": "if (item === condition) {
                return { returned : item };
              }",
                    "stateName": "If (item === condition)",
                    "then": Object {
                      "_syntaxKind": "function",
                      "statements": Array [
                        Object {
                          "_syntaxKind": "return",
                          "expression": Object {
                            "_syntaxKind": "literal-object",
                            "properties": Object {
                              "returned": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "item",
                                "type": "unknown",
                              },
                            },
                          },
                          "stateName": "Return { returned: item }",
                        },
                      ],
                    },
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": undefined,
              "source": undefined,
              "stateName": "For item Of items.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "listWithRetunrned",
              "type": "unknown",
            },
            "stateName": "Assign listWithRetunrned",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "identifier",
              "filterExpression": Object {
                "argument": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                  "type": "unknown",
                },
                "expression": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x.returned",
                  "type": "unknown",
                },
              },
              "identifier": "listWithRetunrned",
              "type": "unknown",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "item",
              "type": "unknown",
            },
            "stateName": "Assign item",
          },
          Object {
            "_syntaxKind": "return",
            "expression": Object {
              "_syntaxKind": "identifier",
              "identifier": "item",
              "type": "unknown",
            },
            "stateName": "Return item",
          },
        ],
      }
    `);
  });
});
