// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.
const dt = new Date();
const actualYear = dt.getFullYear();
const myAge = birth => {
  return actualYear - birth;
};
console.log(myAge(1990));

// "2) Utwórz funkcję, która jako argument przyjmie trzy liczby.
// Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że
// z podanych długości nie można utworzyć trójkąta prostokątnego"
const triangle = (a, b, c) => {
  if (a ** 2 + b ** 2 === c ** 2) return true;
  else return false;
};
console.log(triangle(3, 4, 5));

// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.
const arr = [];
const tenNumbers = () => {
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * 100);
    arr.push(index);
  }
};
tenNumbers();
console.log(arr);

const arr2 = Array.from(
  {
    length: 10
  },
  () => Math.floor(Math.random() * 100)
);

console.log(arr2);

// 4) Umieść 10 tablic wygenerowanych w zadaniu 3, w jednej tablicy.
const arr3 = [];
const arrPush = () => {
  for (let a = 0; a < 10; a++) {
    const emptyArray = [];
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * 100);
      emptyArray.push(index);
    }
    arr3[a] = [emptyArray];
  }
};
arrPush();
console.log(arr3);

// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która
// jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy.
// Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."
const words = [
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
const index = txt => {
  const search = words.indexOf(txt);
  if (search !== -1) {
    console.log(`Szukany wyraz to ${txt} a index to ${search}`);
  } else {
    console.log(`Szukany wyraz nie istnieje`);
  }
};
console.log(index("ala"));

// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
//  Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.
const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const evenNumbers = numbers.filter(item => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(evenNumbers);

// 7) arraye mają zbudowane metody .map .filter i .reduce.
//  Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację funkcji wbudowanych,
// Twoje funkcje mają działać tak samo jak te wbudowane

function map(arr, mapFunc) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i], i, arr);
    mapArr.push(result);
  }
  return mapArr;
}

function filter(arr, filterFunc) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    if (result) filterArr.push(arr[i]);
  }
  return filterArr;
}

function reduce(arr, reducer, initialValue) {
  let acc = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < arr.length; i++) acc = reducer(acc, arr[i], i, arr);
  return acc;
}

// 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), country:oneOf([PL,UK,USA])}
// losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

const randomAge = () => {
  return Math.floor(Math.random() * 68) + 18;
};
const countryArray = ["PL", "UK", "USA"];
const oneOf = countryArray[Math.floor(Math.random() * countryArray.length)];

const GenerateHuman = function(name, surname) {
  this.name = name;
  this.surname = surname;
  this.email = `${name}@${surname}`.toLowerCase();
  this.age = randomAge();
  this.country = oneOf;
};

const human = new GenerateHuman("Tomek", "Omega");
