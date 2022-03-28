
import * as asl from "@ts2asl/asl-lib"

export const literals = asl.deploy.asStateMachine(async () => {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let object2 = { str: "string", num: 33, inner: object };
  let arrayOfNumbers = [1, 2, 3, 4, 5];
  let arrayOfObjects = [{ left: 1, right: 2 }, { left: 3, right: 4 }, { left: 5, right: 6 }];
  return { arrayOfNumbers, arrayOfObjects, object2 };
});

export const arrayWithIdentifiers = asl.deploy.asStateMachine(async () =>{
    let str = asl.pass({
        name: "Assign str",
        parameters: () => "string",
        comment: "str = \"string\""
    });
    let num = asl.pass({
        name: "Assign num",
        parameters: () => 42,
        comment: "num = 42"
    });
    let bool = asl.pass({
        name: "Assign bool",
        parameters: () => true,
        comment: "bool = true || false"
    });
    let object = asl.pass({
        name: "Assign object",
        parameters: () => ({ str, num, bool }),
        comment: "object = { str, num, bool }"
    });
    let array = asl.states.array(str, num, bool, object);
    return array;
});
export const arrayIndexer = asl.deploy.asStateMachine(async () => {
  let arr = [1, 2, 3, 4, 5]
  let two = arr[1];
  return two;
});

export const functions = asl.deploy.asStateMachine(async () => {
  let str = asl.states.format("hello {}", "world")
  let num = asl.states.format("answer is {}", 42);
  let combined = asl.states.format("1: {}\n 2: {}", str, num);
  let arr = asl.states.array(str, num, combined);
  return arr;
});
