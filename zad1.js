// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.

const checkMyAge = birth => {
  const date = new Date();
  const actualYear = date.getFullYear();
  return actualYear - birth;
};
// console.log(`Task 1: I am ${checkMyAge(1990)} years old`);

module.exports = checkMyAge;
