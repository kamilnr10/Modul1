// stwórz sobie array z literami polskiego alfabetu
// stwórz kod na różne metody for, które istnieją w JS
// a potem postaraj się za pomocą funkcji .map odtworzyć działanie każdej funkcji for

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "w",
  "y",
  "z"
];
const polishAlphabet = ["ą", "ć", "ę", "ó", "ś", "ź"];

const forIn = (array, forFn) => {
  for (let prop in alphabet) {
    console.log(`${prop} : ${alphabet[prop]}`);
  }
};

const mapForInArr = alphabet.map((value, index) => {
  console.log(`${index} : ${value}`);
  return {
    index,
    value
  };
});

const forOf = (array, forFn) => {
  for (let alpha of polishAlphabet) {
    console.log(`${alpha}`);
  }
};

const mapForOfArr = polishAlphabet.map((value, index) => {
  console.log(`${value}`);
});

const mapForOf = () => {
  polishAlphabet.map(value => {
    console.log(value);
  });
};

const forI = (array, forFn) => {
  for (let i = 0; i < polishAlphabet.length; i++) {
    console.log(`${polishAlphabet[i]}: ${i}, ${polishAlphabet}`);
  }
};

const mapForIArr = polishAlphabet.map((value, index, array) => {
  console.log(`${value}: ${index}, ${array[index]}`);
});
