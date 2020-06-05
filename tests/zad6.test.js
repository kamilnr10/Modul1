const chai = require("chai");
const {
    assert,
    expect
} = chai;

const filterEvenNumbers = require("../app/zad6.js");

describe('filterEvenNumbers', () => {
    const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

    it('should return an array which has length of 4', () => {
        expect(filterEvenNumbers(numbers)).to.be.an('array').that.have.lengthOf(4)
    })

    it('should return an array', () => {
        expect(filterEvenNumbers(numbers)).to.deep.eql([2, 10, 34, 16])
    })

    it('should throw an error if no input is given', () => {
        expect(() => {
            filterEvenNumbers()
        }).to.throw('Input is needed')
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

    it('should throw an error when array without numbers is given', () => {
        const arrayWithStrings = ['kamil', 'tomek'];

        expect(filterEvenNumbers(arrayWithStrings)).to.throw('Array should contains numbers')
    })

})