const chai = require("chai");
const {
    assert,
    expect
} = chai;

const generetaArrayWithTenNumbers = require('../app/zad3');

describe('Function generateArrayWithTenNumbers()', () => {

    it('should be a function', () => {
        expect(generetaArrayWithTenNumbers).to.be.a('function')
    })

    it('should return an Array', () => {
        expect(generetaArrayWithTenNumbers(1, 100)).to.be.a('array')
    });

    it('should return an array with length of 10', () => {
        expect(generetaArrayWithTenNumbers(1, 100)).to.have.lengthOf(10)
    })

    it('should throw an error if called without an arg or with wrong number of arguments', () => {
        expect(() => {
            generetaArrayWithTenNumbers()
        }).to.throw('2 inputs are needed')
    })

    it('should throw an Error if called without numbers', () => {
        expect(() => {
            generetaArrayWithTenNumbers('10', '100')
        }).to.throw('Inputs should be numbers')
    })

    it('should throw an Error if called with decimal numbers', () => {
        expect(() => {
            generetaArrayWithTenNumbers(5.43, 10.4343)
        }).to.throw('Numbers must be integers')
    })
})