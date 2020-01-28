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


const chunkArray = (arr) => {
    const randomNumber = Math.floor(Math.random() * (8 - 4)) + 4;
    console.log(randomNumber)
    const dividedArray = [];
    for (let i = 0; i < arr.length; i += randomNumber) {
        const rnd = Math.floor(Math.random() * (8 - 4)) + 4;
        dividedArray.push(arr.slice(i, rnd + i));
    }
    return dividedArray;
}

console.log(chunkArray(alphabet))