const chai = require("chai");
const assert = chai.assert;
const expect = require("chai").expect;
const should = chai.should();

const checkMyAge = require("../app/zad1.js");


describe("Function checkMyAge()", () => {
  const yearOfBirth = 1990;

  test("should return 30 when 1990 year is given", () => {
    assert.equal(checkMyAge(yearOfBirth), 30);
  });

  test("should return type of number", () => {
    assert.typeOf(checkMyAge(yearOfBirth), "number");
  });

  test("should be above 0", () => {
    assert.isAbove(checkMyAge(yearOfBirth), 0);
  });

  test('should throw an error if called without an arg', () => {
    expect(checkMyAge()).to.throw('You must provide a number')
  })

  test('should throw an error if called without a number', () => {
    expect(checkMyAge('1990')).to.throw('You must provide a number')
  })

});



// Function should: 
// throw Error when type of string is given
// throw Error when decimal number is given
// Arguments should:
// be a positive number
// be in range 1900 - actual year





// describe("Function - generate array", () => {
//   test("it should has length equal to 10", () => {
//     expect(generateArrayWithTenNumbers(1, 100)).toHaveLength(10);
//     // expect(generateArrayWithTenNumbers(1, 100)).toBeWithinRange(1, 100);
//   });
//   test("should be within range 1 - 100", () => {
//     expect(generateArrayWithTenNumbers(1, 100)).toHaveLength(10);
//   });
// it("should be type of number", () => {
//   expect(checkMyAge(1990)).to.be.a("number");
// });
// });