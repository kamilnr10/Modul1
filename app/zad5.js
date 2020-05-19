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
const searchWordInArray = word => {
  if (arrayOfWords.includes(word))
    return `Task 5: Word: ${word} is in Array. Index of this word is: ${arrayOfWords.indexOf(
      word
    )}`;
  else return `Task 5: Word: ${word} is not in Array`;
};
console.log(searchWordInArray("kamil"));
console.log(searchWordInArray("bogdan"));
