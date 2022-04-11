import * as asl from "@ts2asl/asl-lib"

export const simpleSwitch = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}one`;
        break;
      case 2:
        result = `${result}two`;
        break;
      default:
        result = `${result}three`;
        break;
    }
  }
  return result;
});


export const createAwsAccount = asl.deploy.asStateMachine(async () =>{
    const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
    let creationStatus: string | undefined = asl.pass({
        name: "Assign creationStatus",
        parameters: () => undefined,
        comment: "creationStatus: string | undefined = undefined"
    });
    asl.typescriptDoWhile({
        name: "Do While (creationStatus ...",
        condition: () => creationStatus !== "SUCCEEDED",
        block: async () => {
            const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
            creationStatus = describeResult.CreateAccountStatus.State;
            asl.choice({
                name: "Switch (creationStatus)",
                choices: [
                    {
                        block: async () => {
                            asl.fail({
                                name: "Throw Error",
                                error: "Error",
                                cause: "account creation failed",
                                comment: "throw new Error(\"account creation failed\");"
                            })
                        },
                        condition: () => creationStatus === "FAILED"
                    },
                    {
                        block: async () => {
                            await asl.wait({ seconds: 1 });
                        },
                        condition: () => creationStatus === "IN_PROGRESS"
                    }
                ],
                comment: "switch (creationStatus) {\n      case \"FAILED\": throw new Error(\"account creation failed\");\n      case \"IN_PROGRESS\": await asl.wait({ seconds: 1 });\n    }"
            })
        }
    })
    asl.pass({
        name: "Log (createAccount.Create ...",
        parameters: () => createAccount.CreateAccountStatus.AccountId,
        comment: "console.log(createAccount.CreateAccountStatus.AccountId)"
    });
    return createAccount.CreateAccountStatus.AccountId;
});
