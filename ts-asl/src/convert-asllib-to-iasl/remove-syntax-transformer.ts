import exp = require('constants');
import * as ts from 'typescript';
import factory = ts.factory;

export const removeSyntaxTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isAwaitExpression(node)) {
      return node.expression;
    }
    if (ts.isAsExpression(node)) {
      return node.expression;
    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};