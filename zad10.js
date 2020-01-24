// korzystając z funkcji .reduce stwórz agregację liter alfabetu
//  do postacji array of arrays,
//  tak aby losowo 4-7 liczb stanowiło jeden array 
// - grupa tych arrayów ma być wynikiem tego zadania							

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


const shuffleArr = (arr) => {
    const randomNumber = Math.floor(Math.random() * alphabet.length);
    console.log(randomNumber)

    const dividedArray = [];
    for (let i = 0; i < arr.length; i += randomNumber) {
        dividedArray.push(arr.slice(i, randomNumber + i));
    }
    return dividedArray;
}

console.log(shuffleArr(alphabet))