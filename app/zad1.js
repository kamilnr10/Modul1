// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.

const checkMyAge = birthYear => {
  if (!birthYear || typeof birthYear !== 'number')
    throw new Error('Argument is needed');

  const date = new Date();
  const actualYear = date.getFullYear();
  return actualYear - birthYear;

};
console.log(`Task 1: I am ${checkMyAge(1990)} years old`);

module.exports = checkMyAge;