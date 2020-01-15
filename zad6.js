// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
//  Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.
const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const evenNumbers = numbers.filter(item => {
    if (item % 2 === 0) {
        return item;
    }
});
console.log(evenNumbers);