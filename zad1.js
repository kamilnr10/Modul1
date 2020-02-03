// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.

const date = new Date();
const actualYear = date.getFullYear();
const myAge = birth => {
  return actualYear - birth;
};
console.log(`Task 1: I am ${myAge(1990)} years old`);
