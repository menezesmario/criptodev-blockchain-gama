const { assert, expect } = require('chai')
const request = require("request");
const server =require('../server/server')


describe("SERVER - RGB to Hex", () => {

  it("should return status 200", async () => {
    const response = await request(server)
    .uri('http://localhost:8080')
    .get()
    .expect(200)
  });

});
  
describe("SERVER - Hex to RGB", () => {


  it("should return status 200", () => {});
  
});
