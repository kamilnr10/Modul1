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
const searchWordInArray = (array, word) => {
  if (array.includes(word)) {
    console.log(
      `Task 5: Word: ${word} is in Array. Index of this word is: ${array.indexOf(
        word
      )}`
    );
  } else {
    console.log(`Task 5: Word: ${word} is not in Array`);
  }
};
console.log(`Task 5: ${searchWordInArray(arrayOfWords, "kamil")}`);
