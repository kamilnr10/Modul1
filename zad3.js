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

const arr2 = Array.from({
        length: 10
    },
    () => Math.floor(Math.random() * 100)
);

console.log(arr2);