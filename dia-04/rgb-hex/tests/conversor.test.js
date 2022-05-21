const { assert, expect } = require('chai')


const { rgbToHex, hexToRgb  } = require('../conversor')


describe("RGB to hexadecimal conversion", () => { 

    it("Color in hexadecimal is #ff0000", () => {})
        assert.equal(rgbToHex(255,0,0), '#ff0000')
   }
)

describe("Hexadecimal to RGB conversion", () => { 

    it("Color in hexadecimal is #FF0000", () => {})
        assert.equal(hexToRgb('#ff0000'), '255,0,0')
 

}
)


describe("Hexadecimal to RGB conversion Error", () => { 

    it("Error", () => {})
    assert.notEqual(hexToRgb('#ff0000'),'255,0,3')
    }  
)

