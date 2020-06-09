const chai = require("chai");
const {
    assert,
    expect
} = chai;

const filterEvenNumbers = require("../app/zad6.js");

describe('Array of numbers', () => {
    const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

    it('should be an array with length of 8', () => {
        expect(numbers).to.be.an('array').with.lengthOf(8)
    });

    it('should be an array with numbers', () => {
        for (let number of numbers) {
            expect(number).to.be.a('number')
        }
    })


})

describe('Function filterEvenNumbers()', () => {
    const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
    const decimalNumbers = [2, 5, 6, 10.321, 34.212, 16.1, 879, 1]
    const correctResult = [2, 10, 34, 16]

    it('should return an array with length of 4', () => {
        expect(filterEvenNumbers(numbers)).to.be.an('array').with.lengthOf(4)
    })


    it('should return an array with even numbers', () => {
        expect(filterEvenNumbers(numbers)).to.deep.eql(correctResult)
    })


    it('should throw an error if no input is given', () => {
        expect(() => {
            filterEvenNumbers()
        }).to.throw('Input is needed')
    })

    it('should throw an error when array is with decimal numbers', () => {
        expect(() => {
            filterEvenNumbers(decimalNumbers)
        }).to.throw('Array should contain ingteger numbers')
    })

    it('should throw an error whenever invalid argument is given', () => {
        const argumentsArray = [
            3,
            4,
            -1,
            "4",
            "string",
            {
                number: 5,
            }
        ];

        const pickArg = () => {
            const pick =
                argumentsArray[Math.floor(Math.random() * argumentsArray.length)];
            return pick;
        };

        for (let i = 0; i < argumentsArray.length; i++) {
            expect(() => {
                filterEvenNumbers(pickArg())
            }).to.throw('Input should be an array')
        }
    });

})