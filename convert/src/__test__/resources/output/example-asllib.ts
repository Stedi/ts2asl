import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    let thresholds = asl.pass({
        name: "6: Assign thresholds",
        parameters: () => [
            {
                "metric": "mappings.requests",
                "ceiling": 100
            },
            {
                "metric": "mappings.requests",
                "ceiling": 1000
            }
        ],
        comment: "thresholds = [\n    {\n      \"metric\": \"mappings.requests\",\n      \"ceiling\": 100\n    },\n    {\n      \"metric\": \"mappings.requests\",\n      \"ceiling\": 1000\n    }\n  ]"
    });
    let lastEvaluatedKey: any | undefined = asl.pass({
        name: "16: Assign lastEvaluatedKey",
        parameters: () => undefined,
        comment: "lastEvaluatedKey: any | undefined = undefined"
    }); //$.variables.lastEvaluatedKey
    asl.typescriptDoWhile({
        name: "16: Do While (lastEvaluatedKey)",
        condition: () => lastEvaluatedKey,
        block: async () => {
            let scan = asl.nativeDynamoDBScan({ TableName: "MyStorage", Limit: 1, ExclusiveStartKey: lastEvaluatedKey });
            asl.map({
                name: "18: For item Of scan.Items",
                items: () => scan.Items,
                iterator: item => {
                    asl.map({
                        name: "20: For threshold Of thresholds",
                        items: () => thresholds,
                        iterator: threshold => {
                            let numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N);
                            let numericTotal = asl.states.stringToJson(item.total.N);
                            asl.typescriptIf({
                                name: "23: If ((item.sk.S === thresh ...",
                                condition: () => (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
                                    || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S)),
                                then: async () => {
                                    asl.nativeEventBridgePutEvents({
                                        Entries: [
                                            {
                                                Detail: asl.states.jsonToString({
                                                    account_id: item.pk,
                                                    threshold: threshold
                                                }),
                                                DetailType: "xxx.detail.type",
                                                EventBusName: "default",
                                                Source: "zzz.my.source"
                                            }
                                        ]
                                    });
                                    asl.nativeDynamoDBUpdateItem({
                                        TableName: "MyStorage",
                                        Key: {
                                            pk: item.pk,
                                            sk: item.sk
                                        },
                                        ConditionExpression: "lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue",
                                        UpdateExpression: "SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue",
                                        ExpressionAttributeValues: {
                                            ":newLastSentOnValue": {
                                                N: item.total.N
                                            },
                                            ":newLastBeginDateValue": {
                                                S: item.beginDate.S
                                            }
                                        }
                                    });
                                }
                            })
                        }
                    })
                }
            })
            lastEvaluatedKey = scan.LastEvaluatedKey;
        }
    })
});

interface Item {
  pk: { S: string };
  sk: { S: string };
  total: { N: string };
  lastSentOnValue: { N: string };
  beginDate: { S: string };
  lastBeginDateValue: { S: string };
}