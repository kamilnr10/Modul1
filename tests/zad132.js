const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const isTriangleRectangular = require("./zad2");

describe("Function - is triangle rectangular", () => {
  it("should return true if triangle is rectangular", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    assert.typeOf(isTriangleRectangular(a, b, c), "boolean");
  });
});