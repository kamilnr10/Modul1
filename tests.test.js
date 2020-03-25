const checkMyAge = require("./zad1");
const isTriangleRectangular = require("./zad2");

describe("Function - check my age", () => {
  test("Check your age", () => {
    expect(checkMyAge(1990)).toBe(30);
  });
});

describe("Function - is triange rectangular", () => {
  test("Triangle is rectangular", () => {
    expect(isTriangleRectangular(3, 4, 5)).toBe(true);
  });
  test("Triangle isn't rectangular", () => {
    expect(isTriangleRectangular(3, 4, 6)).toBe(false);
  });
});
