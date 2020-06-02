const chai = require("chai");
const {
  assert,
  expect
} = chai

const isTriangleRectangular = require("../app/zad2");

// da sie zrobić trójkat prostokątny - true
// nie da sie zrobić trójkat prostokątny jeśli są złe argumenty - wywalać error
// nie da sie zrobić trójkat prostokątny jeśli są dobre argumenty - false

describe("Function isTriangleRectangular()", () => {

  it("should return true when called with Numbers in order a, b, c", () => {
    const arrayOfPythagoreanThrees = [{
      a: 3,
      b: 4,
      c: 5
    }, {
      a: 5,
      b: 12,
      c: 13
    }, {
      a: 7,
      b: 24,
      c: 25
    }]

    for (let i = 0; i < arrayOfPythagoreanThrees.length; i++) {
      const {
        a,
        b,
        c
      } = arrayOfPythagoreanThrees[i]
      const rectangularTriangle = isTriangleRectangular(a, b, c)
      expect(rectangularTriangle).to.be.true
    }

  })

  it(`should return false when called with Numbers from which can't create rectangular triangle `, () => {
    const arrayOfNumbers = [3, 4, 6, 8]
    const pickNumber = () => {
      return arrayOfNumbers[Math.floor(Math.random() * arrayOfNumbers.length)]
    }

    for (let i = 0; i <= arrayOfNumbers.length; i++) {
      const rectangularTriangle = isTriangleRectangular(pickNumber(), pickNumber(), pickNumber());
      expect(rectangularTriangle).to.be.false
    }
  });

  it('should throw an error when called with wrong number of arguments', () => {
    expect(() => {
      isTriangleRectangular()
    }).to.throw('3 inputs are needed')
  })

  it('should throw an error whenever invalid arguments are passed', () => {
    const argumentsArray = [3, 4, -1, '4', 'string', {
        number: 5
      },
      [4]
    ]

    const pickArg = () => {
      const pick = argumentsArray[Math.floor(Math.random() * argumentsArray.length)]
      return pick
    }

    for (let i = 0; i <= argumentsArray.length; i++) {
      // console.log(pickArg())
      expect(() => isTriangleRectangular(pickArg(), pickArg(), pickArg())).to.throw('Inputs should be positive Numbers')
    }
  })

});