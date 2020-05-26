const chai = require("chai");
const {
    assert,
    expect
} = chai;

const generateArrayOfTenArraysWithRandNumbers = require('../app/zad4');

describe('Function generateArrayOfTenArraysWithRandNumbers', () => {

    it('should return an Array with length of 10', () => {
        expect(generateArrayOfTenArraysWithRandNumbers(1, 100)).to.be.an('array').that.have.lengthOf(10)
    })
})