const chai = require("chai");
const { assert, expect } = chai;
const mapFunction = require("../app/zad7.js");
const reduceFunction = require("../app/zad7.js");
const filterFunction = require("../app/zad7.js");

describe("Function", () => {
  describe("mapFunction", () => {
    const arrayOfNumbers = [2, 4, 5, 7];
    const returnElement = (el) => {
      return el;
    };
    const addTwo = (el) => {
      return el + 2;
    };

    it("should return array with length of 4", () => {
      expect(mapFunction(arrayOfNumbers, returnElement))
        .to.be.an("array")
        .with.lengthOf(4);
    });

    it("should return new array", () => {
      const newArray = mapFunction(arrayOfNumbers, returnElement);

      expect(newArray).to.be.an("array");
    });

    it("should throw an error when empty array is given", () => {
      expect(() => {
        mapFunction([], returnElement);
      }).to.throw("First argument should be an array and it can not be empty");
    });

    it("should throw an error when first argument is not an array", () => {
      const returnElement = (el) => {
        return el;
      };
      expect(() => {
        mapFunction({ name: "kamil" }, returnElement);
      }).to.throw("First argument should be an array and it can not be empty");
    });

    it("should throw an error when second argument is not a function", () => {
      const arrayOfNumbers = [2, 4, 5, 7];
      expect(() => {
        mapFunction(arrayOfNumbers, ["kamil"]);
      }).to.throw("Second argument should be a function");
    });
  });

  describe("filterFunction", () => {
    const arrayOfNumbers = [2, 4, 5, 7];
    const lessThanFive = (el) => {
      return el < 5;
    };

    it("should return array with length of 2", () => {
      expect(filterFunction(arrayOfNumbers, lessThanFive))
        .to.be.an("array")
        .with.lengthOf(2);
    });

    it("should return new array", () => {
      const newArray = filterFunction(arrayOfNumbers, lessThanFive);

      expect(newArray).to.be.an("array");
    });

    it("should throw an error when empty array is given", () => {
      expect(() => {
        filterFunction([], lessThanFive);
      }).to.throw("First argument should be an array and it can not be empty");
    });

    it("should throw an error when first argument is not an array", () => {
      expect(() => {
        filterFunction({ name: "kamil" }, lessThanFive);
      }).to.throw("First argument should be an array and it can not be empty");
    });

    it("should throw an error when second argument is not a function", () => {
      expect(() => {
        filterFunction(arrayOfNumbers, ["kamil"]);
      }).to.throw("Second argument should be a function");
    });
  });
});
