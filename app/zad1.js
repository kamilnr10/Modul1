// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.

const checkMyAge = birthYear => {
  if (typeof birthYear === 'number') {
    const date = new Date();
    const actualYear = date.getFullYear();
    return actualYear - birthYear;
  } else {
    throw Error('Year of birth should be type of number')
  }
};
// console.log(`Task 1: I am ${checkMyAge(1990)} years old`);

module.exports = checkMyAge;