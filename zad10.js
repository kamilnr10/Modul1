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

const nextIndex = Math.floor(Math.random() * alphabet.length);

const chunk = (array) => {
    const dividedArr = [];
    for (let i = 0; i < array.length; i++) {
        const part = dividedArr[dividedArr.length - 1];
        if (!part || part.length === nextIndex) {
            dividedArr.push([array[i]]);
        } else {
            part.push(array[i]);
        }
    }
    return dividedArr;
}


// stwórz sobie zmieną nextIndex która na początku jest 1 liczbą random
// 6:06
// a potem dodawaj do niej kolejne liczby randomowe jeśli przepchnie się cały array
// 6:06
// powinieneś wewnątrz fora użyć ifa
// 6:06
// i stworzyć sobie np let partArray = []
// 6:06
// do którego są wrzucane elementy w danej częsci
// 6:07
// lub jeśli index i nextIndex będą się zgadzać to partArray powinien być wrzucany do dividedArray