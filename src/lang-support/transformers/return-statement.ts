import * as ts from 'typescript';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples: return;`

export const returnStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isReturnStatement(node)) {

      const result = TransformUtil.createWrappedExpression("result", node.expression);
      const comment = TransformUtil.createComment(node);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [result, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }
      node = TransformUtil.createAslInvoke("succeed", assignments);
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
