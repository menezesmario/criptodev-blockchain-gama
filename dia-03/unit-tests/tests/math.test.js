const { assert, expect } = require('chai')

const { sum, sub, div, mul, mod } = require('../math')

describe("My first test", () => {    

    it('Sum equal to two', () => {
        assert.equal(sum(1,1), 2)
    })

    it('Div equal to 5', () => {
        assert.equal(div(10,2), 5)
    })

    it("Sum equal to 2 with diferent way", () => {
        expect(1+1).to.equal(2)
    })

})

describe("My lib test", () => {
    
    it('sum of 2 numbers', () => {
        const expectedValue = 10;
        const actualResultSum = sum(5,5)

        assert.equal(actualResultSum, expectedValue)
    })

    it('sub of 2 numbers', () => {
        const firstTestExpected = 0
        const firstResult = sub(10,10)

        const secondTestExpected = 2
        const secondResult = sub(4,2)

        assert.equal(firstResult, firstTestExpected)
        assert.equal(secondResult, secondTestExpected)
    })

})