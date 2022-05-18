import { S3ClientConfig } from "@aws-sdk/client-s3";
export type ClientConfig = S3ClientConfig;
export * from "./asl";
export * from "./sdk-integrations-athena";
export * from "./sdk-integrations-ecs";
export * from "./sdk-integrations-dynamodb";
export * from "./sdk-integrations-eventbridge";
export * from "./sdk-integrations-lambda";
export * from "./sdk-integrations-s3";
export * from "./sdk-integrations-ses";
export * from "./sdk-integrations-sns";
export * from "./sdk-integrations-sqs";
export * from "./sdk-integrations-ssm";
export * from "./sdk-integrations-sfn";
export * from "./sdk-integrations-textract";
export * from "./sdk-integrations-organizations";
export * from "./sdk-integrations-codebuild";
export * from "./sdk-integrations-cloudwatch";
export * from "./deploy"
export * from "./runtime"


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:invoke'*/
export const sdkAPIGatewayInvoke = (input: unknown): Promise<unknown> => {
  return Promise.resolve({});
};


export const clientConfig = {} as ClientConfig;