// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.
const dt = new Date();
const actualYear = dt.getFullYear();
const myAge = birth => {
    return actualYear - birth;
};
console.log(myAge(1990));