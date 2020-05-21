const chai = require("chai");
const assert = chai.assert;
const expect = require("chai").expect;
const err = require('chai').AssertionError
const should = chai.should();

const checkMyAge = require("../app/zad1.js");



describe("Function checkMyAge()", () => {
  const myAge = checkMyAge(1990)

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