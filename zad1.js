// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.
const dt = new Date();
const actualYear = dt.getFullYear();
const myAge = birth => {
    return actualYear - birth;
};
console.log(myAge(1990));

// const sample1 = [1, 2, 3];
// const mapResult1 = sample1.mymap(function (val, index, array) {
//             console.log(“val“: val, “index: “, index, “array: “, array);
//             return val * 2;
//              });