const chai = require("chai");
const {
    assert,
    expect
} = chai;
chai.use(require("chai-string"));

// const arrayOfWords = require("../app/zad5.js");
const searchWordInArray = require("../app/zad5.js");


describe("searchWordInArray", () => {
    it("should return value and indexOf value when the value and array is given", () => {
        const arrayOfWords = [
            "ala",
            "tomek",
            "gosia",
            "bartek",
            "ola",
            "jan",
            "ewelina",
            "stefania",
            "kamil",
            "adrian",
            "wojtek",
            "kuba",
            "piotrek",
            "karol",
            "amelia",
        ];
        // console.log(searchWordInArray('kamil', arrayOfWords))
        // expect(searchWordInArray('kamil', arrayOfWords)).to.equal(`Task 5: Word: kamil is in Array. Index of this word is: 8`)
        for (let i = 0; i < arrayOfWords.length; i++) {
            // assert.equal(arrayOfWords.indexOf(arrayOfWords[i]), i);
            expect(searchWordInArray(arrayOfWords[i], arrayOfWords)).to.equal(
                `Task 5: Word: ${
            arrayOfWords[i]
          } is in Array. Index of this word is: ${arrayOfWords.indexOf(
            arrayOfWords[i]
          )}`
            );
        }
    });

    it("should throw an error when called with wrong numbers of arguments", () => {
        expect(() => {
            searchWordInArray();
        }).to.throw("Two inputs are needed");
    });

    it("should throw an error when called with wrong arguments", () => {
        const argumentsArray = [
            3,
            4,
            -1,
            "4",
            "string",
            {
                number: 5,
            },
        ];

        const pickArg = () => {
            const pick =
                argumentsArray[Math.floor(Math.random() * argumentsArray.length)];
            return pick;
        };

        for (let i = 0; i < argumentsArray.length; i++) {
            expect(() => {
                searchWordInArray(pickArg(), pickArg());
            }).to.throw(
                "First argument should be type of string, second - an Array"
            );
        }
    });
});