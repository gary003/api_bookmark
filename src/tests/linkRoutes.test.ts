import chai from "chai"
import request from "supertest"
import app from "../app"

let testLinkId: number = null

describe("API bookmark tests", () => {
  describe("route > link > GET", () => {
    it("should return an array", (done) => {
      // with Mocha don't use return (return request(app)) !
      request(app)
        .get("/api/link")
        .set("Accept", "application/json")
        .end((err, result) => {
          // console.log(result.body)
          if (!!err) return done(err)
          chai.assert.isArray(result.body)
          if (result.body.length > 0) {
            chai.assert.exists(result.body[0].linkId)
            chai.assert.include(["video", "photo"], result.body[0].linkType)
            chai.assert.exists(result.body[0].title)
            chai.assert.exists(result.body[0].URL)
            chai.assert.exists(result.body[0].addDate)
            chai.assert.exists(result.body[0].publicationDate)
            chai.assert.exists(result.body[0].height)
            chai.assert.exists(result.body[0].width)
          }
          done()
        })
    })
  })

  describe("route > link > POST", () => {
    it("should add a new link", (done) => {
      request(app)
        .post("/api/link")
        .send({
          linkType: "video",
          title: "title_video_test",
          URL: "URL_video_test",
          addDate: "2022-05-15 08:25:55",
          publicationDate: "",
          thumbnail: "thumbnail_test",
          height: 180,
          width: 120,
          duration: 520,
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .end((err, result) => {
          // console.log(result.body)
          if (!!err) return done(err)
          chai.assert.isNotEmpty(result.body)
          testLinkId = result.body.linkId
          done()
        })
    })
  })

  describe("route > link > PUT", () => {
    it("should update an existing link", (done) => {
      request(app)
        .put("/api/link")
        .send({
          linkId: testLinkId,
          title: "new_title_video_test",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .end((err, result) => {
          // console.log(result.body)
          if (!!err) return done(err)
          chai.assert.isNotEmpty(result.body)
          testLinkId = result.body.linkId
          done()
        })
    })
  })

  describe("route > link > GET", () => {
    it("should return a single link", (done) => {
      // with Mocha don't use return (return request(app)) !
      request(app)
        .get("/api/link/" + testLinkId)
        .set("Accept", "application/json")
        .end((err, result) => {
          // console.log(result.body)
          if (!!err) return done(err)
          chai.assert.exists(result.body.linkId)
          chai.assert.include(["video", "photo"], result.body.linkType)
          chai.assert.exists(result.body.title)
          chai.assert.exists(result.body.URL)
          chai.assert.exists(result.body.addDate)
          chai.assert.exists(result.body.publicationDate)
          chai.assert.exists(result.body.height)
          chai.assert.exists(result.body.width)
          done()
        })
    })
  })

  describe("route > link > DELETE", () => {
    it("should delete a specified link", (done) => {
      request(app)
        .delete("/api/link/" + testLinkId)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .end((err, result) => {
          // console.log(result.body)
          if (!!err) return done(err)
          chai.assert.isNotNull(result.body)
          done()
        })
    })
  })
})
