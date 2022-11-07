let request = require("request");

const baseURL = "http://localhost:3036/laptops/";

console.log("Starting laptopTest_spec.js");

describe("Test server for Laptops", () => {
    describe("GET /team", () => {
        it("returns Team Name & Members", (done) => {
            request.get(baseURL+"team", (err, resp, body) => {
                laptopData = JSON.parse(body);
                console.log(laptopData);
                expect(laptopData.team).toBe("team09-laptops");
                done();
            });
        });
    });
});