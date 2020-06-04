// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która
// jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy.
// Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."
const arrayOfWords = [
  "ala",
  "tomek",
  "gosia",
  "bartek",
  "ola",
  "jan",
  "ewelina",
  "stefania",
  "kamil",
  "adrian",
  "wojtek",
  "kuba",
  "piotrek",
  "karol",
  "amelia"
];

module.exports = arrayOfWords;

const searchWordInArray = (word, array) => {
  if (!word || !array) {
    throw new Error('Two inputs are needed')
  }
  if (typeof word !== 'string' || !Array.isArray(array)) {
    throw new Error('First argument should be type of string, second - an Array')
  }
  if (array.includes(word) && Array.isArray(array)) {
    return `Task 5: Word: ${word} is in Array. Index of this word is: ${array.indexOf(
      word
    )}`
  } else return `Task 5: Word: ${word} is not in Array`;
};
// console.log(searchWordInArray("kamil"));
// console.log(searchWordInArray("bogdan"));


module.exports = searchWordInArray;