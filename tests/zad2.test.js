const chai = require("chai");
const {
  assert,
  expect
} = chai


const isTriangleRectangular = require("../app/zad2");


describe("Function isTriangleRectangular()", () => {

  it("should return true if called with arguments 3,4,5", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    const rectangularTriangle = isTriangleRectangular(a, b, c);
    assert.typeOf(rectangularTriangle, "boolean");
  });

  it('should throw an error if called without an arg or with wrong number of arguments', () => {
    expect(() => {
      isTriangleRectangular()
    }).to.throw('3 inputs are needed')
  })

  it('should throw an error if called without numbers', () => {
    const argumentsArray = [3, 4, -1, '4', 'string', {
        name: 'kamil'
      },
      ['test', 4]
    ]

    const pickArg = () => {
      const pick = argumentsArray[Math.floor(Math.random() * argumentsArray.length)]
      return pick
    }

    for (let i = 0; i <= argumentsArray.length; i++) {
      expect(() => {
        isTriangleRectangular(pickArg(), pickArg(), pickArg())
      }).to.throw('Inputs should be positive Numbers')
    }
  })

  it('should throw an error if there is no way to build rectangular triangle from given arguments', () => {
    expect(() => {
      isTriangleRectangular(4, 5, 4)
    }).to.throw('From given arguments there is no way to build rectangular triangle')
  })
});