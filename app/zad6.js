// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
//  Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.
const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const filterEvenNumbers = array => {
  if (!array) {
    throw new Error('Input is needed')
  }
  if (!Array.isArray(array)) {
    throw new Error('Input should be an array')
  }
  // if (!array.includes(typeof 'number')) {
  //   throw new Error('Array should includes numbers')
  // } 
  return array.filter(el => {
    if (typeof el == 'number') {
      return el % 2 == 0;
    } else if (typeof el !== 'number') {
      throw new Error('Array should contains numbers')
    }
  });

};

module.exports = filterEvenNumbers;

// console.log(
//   `Task 6: Only even numbers in array: ${filterEvenNumbers(numbers)} `
// );