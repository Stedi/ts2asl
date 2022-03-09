import * as ts from 'typescript';
import { convertToBlock } from './block-utility';
import factory = ts.factory;
import { TransformUtil } from './transform-utility';
import { ensureBooleanExpression } from './node-utility';

export const doWhileStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isDoStatement(node)) {

      const condition = TransformUtil.createWrappedExpression("condition", ensureBooleanExpression(node.expression));
      const block = TransformUtil.createNamedBlock("block", convertToBlock(node.statement));
      const comment = TransformUtil.createComment(node);
      const name = TransformUtil.createNamePropertyAssignment(node, "Do While (%s)", node.expression);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [name, condition, block, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = TransformUtil.createAslInvoke("typescriptDoWhile", assignments);
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
