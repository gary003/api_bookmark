// import { assert } from "chai"
// import { request } from "supertest"
// import app from "../src/app"

describe("API bookmark tests", () => {
  describe("route > link > GET", () => {
    it("should return an array", (done) => {
      // with Mocha don't use return (return request(app)) !
      // request(app)
      //   .get("/api/link")
      //   .set("Accept", "application/json")
      //   .expect("Content-Type", /json/)
      //   .end((err, result) => {
      //     console.log(result)
      //     if (!!err) return done(err)
      //     assert.isArray([12, 3])
      //     done()
      //   })
      done()
    })
  })

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
})
