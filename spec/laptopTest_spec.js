let request = require("request");

const baseURL = "http://localhost:3036/laptops/";

console.log("Starting laptopTest_spec.js");

describe("Test server for Laptops", () => {
    describe("GET /team", () => {
        it("returns Team Name & Members", (done) => {
            request.get(baseURL + "team", (err, resp, body) => {
                teamData = JSON.parse(body);
                expect(teamData.team).toBe("Laptops");
                expect(teamData.membersNames[1]).toBe("Tanmay");
                done();
            });
        });
    });

    describe("GET /all/**", () => {
        it("returns regular prices of the laptops", (done) => {
            request.get(baseURL + "all", (err, resp, body) => {
                laptopData = JSON.parse(body);
                expect(laptopData[0].product).toBe("ThinkPad T430s");
                expect(laptopData[0].price).toBe(325.09);
                done();
            });
        });
    });

    describe("GET /all/raleigh", () => {
        it("returns laptop prices after a 7.5% sales-tax addition", (done) => {
            request.get(baseURL + "all/raleigh", (err, resp, body) => {
                laptopData = JSON.parse(body);
                expect(laptopData[0].product).toBe("ThinkPad T430s");
                expect(laptopData[0].price).toBe(349.47175);
                done();
            });
        });
    });

    describe("GET /all/durham", () => {
        it("returns laptop prices after an 8% sales-tax addition", (done) => {
            request.get(baseURL + "all/durham", (err, resp, body) => {
                laptopData = JSON.parse(body);
                expect(laptopData[0].product).toBe("ThinkPad T430s");
                expect(laptopData[0].price).toBe(351.0972);
                done();
            });
        });
    });
});