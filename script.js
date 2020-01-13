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
const tenNumbers = () => {
    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * 100);
        arr.push(index)
    }
}
tenNumbers();
console.log(arr)

const arr2 = Array.from({
    length: 10
}, () => Math.floor(Math.random() * 100));

console.log(arr2)

const arr3 = [];
const arrPush = () => {
    for (let a = 0; a < 10; a++) {
        arr3[a] = [arr];
    }
}
arrPush();
console.log(arr3)



const words = ["ala", "tomek", "gosia", "bartek", "ola", "jan", "ewelina", "stefania", "kamil", "adrian", "wojtek", "kuba", "piotrek", "karol", "amelia"]
const index = (txt) => {
    const search = words.indexOf(txt);
    if (search !== -1) {
        console.log(`Szukany wyraz to ${txt} a index to ${search}`)
    } else {
        console.log(`Szukany wyraz nie istnieje`)
    }
}