const chai = require("chai");
const {
  assert,
  expect
} = chai


const isTriangleRectangular = require("../app/zad2");


describe("Function isTriangleRectangular()", () => {

  it('should be a function', () => {
    expect(isTriangleRectangular).to.be.a('function')
  })

  it("should return boolean if called with Numbers as arguments", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    const rectangularTriangle = isTriangleRectangular(a, b, c);
    expect(rectangularTriangle).which.is.a('boolean').but.not.a('number')
  });

  it("should return false if called with arguments 5, 4, 3", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    const rectangularTriangle = isTriangleRectangular(c, b, a);
    expect(rectangularTriangle).to.be.false
  });

  it('should throw an error if called without an argument or with wrong number of arguments', () => {
    expect(() => {
      isTriangleRectangular()
    }).to.throw('3 inputs are needed')
  })

  it('should throw an error if called with arguments which are not Numbers', () => {
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
      expect(() => isTriangleRectangular(pickArg(), pickArg(), pickArg())).to.throw('Inputs should be positive Numbers')
      // expect(() => {
      //   isTriangleRectangular(pickArg(), pickArg(), pickArg())
      // }).to.throw('Inputs should be positive Numbers')
    }
  })

});