const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const isTriangleRectangular = require("../app/zad2");

describe("Function isTriangleRectangular()", () => {
  const a = 3;
  const b = 4;
  const c = 5;
  const rectangularTriangle = isTriangleRectangular(a, b, c);

  it("should return true if called with arguments 3,4,5", () => {
    assert.typeOf(rectangularTriangle, "boolean");
  });

  it('should throw an error if called without an arg', () => {
    expect(() => {
      isTriangleRectangular()
    }).to.throw('Inputs are needed')
  })

  it('should throw an error if called without numbers', () => {
    expect(() => {
      isTriangleRectangular('1', 3, '4')
    }).to.throw('Inputs should be positive numbers')
  })
});