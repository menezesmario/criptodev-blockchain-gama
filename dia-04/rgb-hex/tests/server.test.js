const { assert, expect } = require('chai')
const request = require("request");
const server =require('../server/server')




describe("SERVER - RGB to Hex", () => {

  const url = "http://localhost:8080/rgbToHex?r=255&g=0&b=0";

  it("should return status 200", (ok) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      ok()
    })
  });
  

});
  
describe("SERVER - Hex to RGB", () => {


  it("should return status 200", () => {});
  
});
