import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  const response = await asl.optimized.apiGatewayInvoke({
    parameters: {
      apiEndpoint: "aabbccddee.execute-api.us-east-1.amazonaws.com",
      method: "GET",
  }});

  if (response.statusCode === 200) {
    return "ok"
  }

  return "not-ok";
});
