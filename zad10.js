const polishAlphabet = ["ą", "ć", "ę", "ó", "ś", "ź"];



const emptyArr = [];
const agregate = () => {
    const index = Math.floor(Math.random() * polishAlphabet.length);
    if (index > 0) {
        const arr1 = polishAlphabet.splice(0, index);
        const arr2 = polishAlphabet.splice(0, polishAlphabet.length)
        emptyArr.push(arr1, arr2);
        return emptyArr
    }

}