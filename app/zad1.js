// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.

const checkMyAge = yearOfBirth => {
  const date = new Date();
  const actualYear = date.getFullYear();
  if (!yearOfBirth) {
    throw new Error('No input')
  } else if (typeof yearOfBirth !== 'number') {
    throw new Error('Wrong data type')
  } else if (yearOfBirth <= 1900 || yearOfBirth > actualYear) {
    throw new Error('yearOfBirth should be in range 1990-actual year')
  } else return actualYear - yearOfBirth;

};
console.log(`Task 1: I am ${checkMyAge(1990)} years old`);

module.exports = checkMyAge;