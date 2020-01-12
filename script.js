const dt = new Date();

const actualYear = dt.getFullYear();
const myAge = (birth) => {
    return (actualYear - birth)
};



const triangle = (a, b, c) => {
    if ((a ** 2 + b ** 2) === c ** 2) return true;
    else return false

}

const arr = []
const chars = '0123456789';
const charsNumber = 10;
const tenNumbers = () => {
    for (let i = 0; i < charsNumber; i++) {
        const index = Math.floor(Math.random() * 10);
        arr.push(chars[index])
    }
}
tenNumbers();
console.log(arr)

let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.sort(() => Math.random() - Math.random());
console.log(arr2)

let arr3 = [...Array(10).keys()];

const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const evenArray = numbers.filter(number => {
    if (number % 2 === 0) {
        return number
    }
});
console.log(evenArray)