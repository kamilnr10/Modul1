// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.
const genArrWithTenNumbers = (min, max) => {
  return [...Array(10)].map(val => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  });
};

console.log(`Task 3: ${genArrWithTenNumbers(0, 100)}`);
