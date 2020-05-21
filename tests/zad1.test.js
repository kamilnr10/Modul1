const chai = require("chai");
const assert = chai.assert;
const expect = require("chai").expect;
const err = require('chai').AssertionError
const should = chai.should();

const checkMyAge = require("../app/zad1.js");



describe("Function checkMyAge()", () => {
  const myAge = checkMyAge(1990)
  console.log(myAge)
  it("should return 30 when 1990 year is given", () => {
    expect(myAge).to.equal(30)
  });

  it("should return positive number >=0", () => {
    assert.isAbove(myAge, 0);
  });


  it('should throw an error if called without an arg ', () => {
    expect(() => {
      checkMyAge()
    }).to.throw('No input')
  })

  it('should throw an error if called without a number', () => {
    expect(() => {
      checkMyAge('1990')
    }).to.throw('Wrong data type')
  })

  it('should throw an error if called yearOfBirth is not in range 1900 - actaual year',
    () => {
      expect(() => {
        checkMyAge(1850)
      }).to.throw('yearOfBirth should be in range 1990-actual year')
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