// 7) arraye mają zbudowane metody .map .filter i .reduce.
//  Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację funkcji wbudowanych,
// Twoje funkcje mają działać tak samo jak te wbudowane

const arrayOfNumbers = [2, 4, 5, 7];

const map = (arr, mapFunc) => {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i], i, arr);
    mapArr.push(result);
  }
  return mapArr;
};

const addTwo = el => {
  return el + 2;
};

console.log(`Task 7: Map method returns: ${map(arrayOfNumbers, addTwo)}`);

const filter = (arr, filterFunc) => {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    if (result) filterArr.push(arr[i]);
  }
  return filterArr;
};

const lessThanFive = el => {
  return el < 5;
};

console.log(
  `Task 7: Filter method returns: ${filter(arrayOfNumbers, lessThanFive)}`
);

const reduce = (arr, reducer, initialValue) => {
  let acc = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < arr.length; i++) acc = reducer(acc, arr[i], i, arr);
  return acc;
};

const additionAllElements = (a, b) => {
  return a + b;
};

console.log(
  `Task 7: Reduce method returns: ${reduce(
    arrayOfNumbers,
    additionAllElements
  )}`
);
