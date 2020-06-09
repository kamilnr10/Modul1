// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
//  Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.
const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const decimalNumbers = [2, 5, 7, 10.1212, 34.212, 16, 879, 1]
const filterEvenNumbers = array => {
  if (!array) {
    throw new Error('Input is needed')
  }
  if (!Array.isArray(array)) {
    throw new Error('Input should be an array')
  }
  return array.filter(el => {
    if (!Number.isInteger(el)) {
      throw new Error('Array should contain ingteger numbers')
    } else {
      return el % 2 == 0

    }
  })
}


module.exports = filterEvenNumbers;

// console.log(
//   `Task 6: Only even numbers in array: ${filterEvenNumbers(numbers)} `
// );