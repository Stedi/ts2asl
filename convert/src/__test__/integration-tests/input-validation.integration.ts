import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting input-validation", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("input-validation", "main");
        const { main } = require("../resources/input-validation");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});