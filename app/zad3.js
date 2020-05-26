// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.
const generateArrayWithTenNumbers = (min, max) => {
  if (!min || !max) {
    throw new Error('2 inputs are needed')
  } else if (typeof min !== 'number' && typeof max !== 'number') {
    throw new Error('Inputs should be numbers')
  } else if (min !== parseInt(min, 10 || max !== parseInt(max, 10))) {
    throw new Error('Numbers must be integers')
  } else {
    return [...Array(10)].map(el => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    });
  }

};

// console.log(`Task 3: ${generateArrayWithTenNumbers(0, 100)}`);

module.exports = generateArrayWithTenNumbers;