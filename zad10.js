// korzystając z funkcji .reduce stwórz agregację liter alfabetu
//  do postacji array of arrays,
//  tak aby losowo 4-7 liczb stanowiło jeden array
// - grupa tych arrayów ma być wynikiem tego zadania

const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "w",
  "y",
  "z"
];

// const chunkArray = arr => {
//   const min = 4;
//   const max = 7;
//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 4;
//   console.log(randomNumber);
//   const dividedArray = [];
//   for (let i = 0; i < arr.length; i += randomNumber) {
//     const rnd = Math.floor(Math.random() * (max - min + 1)) + 4;
//     dividedArray.push(arr.slice(i, rnd + i));
//   }
//   return dividedArray;
// };

// console.log(chunkArray(alphabetArray));

const chunkArray = array => {
  return array.reduce((accumulator, index) => {
    let randomIndex = Math.floor(Math.random() * (8 - 4) + 4);
    accumulator.push(array.splice(index, randomIndex));
    return accumulator;
  }, []);
};

console.log("Task 10:", chunkArray(alphabetArray));
