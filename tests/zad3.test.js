const chai = require("chai");
const {
    assert,
    expect
} = chai;

const generetaArrayWithTenNumbers = require('../app/zad3');

describe('Function generateArrayWithTenNumbers()', () => {

    it('should return an Array', () => {
        expect(generetaArrayWithTenNumbers(1, 100)).to.be.a('array')
    });

    it('should return an array with length of 10', () => {
        expect(generetaArrayWithTenNumbers(1, 100)).to.have.lengthOf(10)
    })

    it('should throw an Error when called without any arguments', () => {
        expect(() => {
            generetaArrayWithTenNumbers()
        }).to.throw('Inputs should be positive Numbers')
    })
})