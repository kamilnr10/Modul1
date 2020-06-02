const chai = require("chai");
const {
    assert,
    expect
} = chai;
chai.use(require('chai-string'));

// const arrayOfWords = require("../app/zad5.js");
const searchWordInArray = require("../app/zad5.js");




describe('Task 5', function () {
    describe('searchWordInArray', function () {
        it('should return value and indexOf value when the value and array is given', function () {
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
                "amelia"
            ];
            // console.log(searchWordInArray('kamil', arrayOfWords))
            // expect(searchWordInArray('kamil', arrayOfWords)).to.equal(`Task 5: Word: kamil is in Array. Index of this word is: 8`)
            for (let i = 0; i < arrayOfWords.length; i++) {
                // assert.equal(arrayOfWords.indexOf(arrayOfWords[i]), i);
                expect(searchWordInArray(arrayOfWords[i], arrayOfWords)).to.equal(`Task 5: Word: ${arrayOfWords[i]} is in Array. Index of this word is: ${arrayOfWords.indexOf(arrayOfWords[i])}`)
            }
        });
    });
});
// expect(arrayOfWords).to.have.indexOf('kamil', 8);