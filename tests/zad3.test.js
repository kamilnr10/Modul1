const chai = require("chai");
const {
    assert,
    expect
} = chai;

const generetaArrayWithTenNumbers = require('../app/zad3');



describe('Function generateArrayWithTenNumbers()', () => {


    it('should return an Array with length of 10 when called with Numbers', () => {
        expect(generetaArrayWithTenNumbers(1, 100)).to.be.a('array').that.have.lengthOf(10)
    });


    it('should return an Array with Numbers within 10-20 range', () => {
        const testElementsRange = (start, end) => {
            const actualArray = generetaArrayWithTenNumbers(10, 20);

            for (let i = 0; i < actualArray.length; ++i) {
                assert.isAtLeast(actualArray[i], start);
                assert.isAtMost(actualArray[i], end);
            }
        }
        testElementsRange(10, 20);
    });

    it('should throw an error when called with wrong numbers of arguments', () => {
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