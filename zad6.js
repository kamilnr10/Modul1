// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
//  Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.
const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const isEvenNumbers = array => {
  return array.filter(el => {
    return el % 2 == 0;
  });
};
console.log(`Task 6: Only even numbers in array: ${isEvenNumbers(numbers)} `);
