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

    it('should return an Array of ten Arrays with Numbers within 10-20 range', () => {
        const testElementsRange = (start, end) => {
            const arrayOfArrays = generateArrayOfTenArraysWithRandNumbers(10, 20);

            for (let array of arrayOfArrays) {
                const actualArray = array
                for (let test of actualArray) {
                    assert.isAtLeast(test, start);
                    assert.isAtMost(test, end);
                }
            }
        }
        testElementsRange(10, 20);
    });

    it('should throw an error when called with wrong numbers of arguments', () => {
        expect(() => {
            generateArrayOfTenArraysWithRandNumbers()
        }).to.throw('2 inputs are needed')
    })

    it('should throw an Error if called without numbers', () => {
        expect(() => {
            generateArrayOfTenArraysWithRandNumbers('10', '100')
        }).to.throw('Inputs should be numbers')
    })

    it('should throw an Error if called with decimal numbers', () => {
        expect(() => {
            generateArrayOfTenArraysWithRandNumbers(5.43, 10.4343)
        }).to.throw('Numbers must be integers')
    })
})