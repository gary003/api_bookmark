"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var chai_1 = __importDefault(require("chai"));
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../src/app"));
describe("API bookmark tests", function () {
    describe("route > link > GET", function () {
        it("should return an array", function (done) {
            // with Mocha don't use return (return request(app)) !
            (0, supertest_1["default"])(app_1["default"])
                .get("/api/link")
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .end(function (err, result) {
                console.log(result);
                if (!!err)
                    return done(err);
                chai_1["default"].assert.isArray(result);
                done();
            });
        });
    });
    // describe("POST", () => {
    //   it("should add a new customer", (done) => {
    //     request(app)
    //       .post("/graphql")
    //       .send({
    //         query: `mutation AC{ addCustomer( name: "Tanya Slowski", age: 32, email: "TS@outlook.com"){ name, id } }`
    //       })
    //       .set("Accept", "application/json")
    //       .expect("Content-Type", /json/)
    //       .end((err, result) => {
    //         // console.log(result.body.data)
    //         if (!!err) return done(err)
    //         customerTestId = result.body.data.addCustomer.id
    //         assert.isNotNull(result.body.data.addCustomer.id)
    //         done()
    //       })
    //   })
    // })
    // describe("DELETE", () => {
    //   it("should get a user and delete it", (done) => {
    //     // console.log(customerTestId)
    //     request(app)
    //       .post("/graphql")
    //       .send({
    //         query: `mutation deleteCustomer($id: String!){
    //                   deleteCustomer(id: $id){ id }
    //                 }`,
    //         operationName: "deleteCustomer",
    //         variables: {
    //           id: customerTestId
    //         }
    //       })
    //       .set("Accept", "application/json")
    //       .expect("Content-Type", /json/)
    //       .end((err, result) => {
    //         // console.log(result.body)
    //         if (!!err) return done(err)
    //         assert.isNotNull(result.body.data.deleteCustomer.id)
    //         done()
    //       })
    //   })
    // })
});
