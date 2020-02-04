// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.
const generateArraayWithTenNumbers = (min, max) => {
  return [...Array(10)].map(val => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  });
};

console.log(`Task 3: ${generateArrayWithTenNumbers(0, 100)}`);
