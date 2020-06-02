// 4) Umieść 10 tablic wygenerowanych w zadaniu 3, w jednej tablicy.
// const arr3 = [];
// const arrPush = () => {
//     for (let a = 0; a < 10; a++) {
//         const emptyArray = [];
//         for (let i = 0; i < 10; i++) {
//             const index = Math.floor(Math.random() * 100);
//             emptyArray.push(index);
//         }
//         arr3[a] = [emptyArray];
//     }
// };
// arrPush();
// console.log(arr3);

const generateArrayOfTenArraysWithRandNumbers = (min, max) => {
  if (!min || !max) {
    throw new Error('2 inputs are needed')
  } else if (typeof min !== 'number' && typeof max !== 'number') {
    throw new Error('Inputs should be numbers')
  } else if (min !== parseInt(min, 10 || max !== parseInt(max, 10))) {
    throw new Error('Numbers must be integers')
  } else {
    return [...Array(10)].map(el => {
      return [...Array(10)].map(el => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      });
    })
  };
};

module.exports = generateArrayOfTenArraysWithRandNumbers;
// console.log(`Task 4: ${generateArrayOfTenArraysWithRandNumbers(0, 100)}`);