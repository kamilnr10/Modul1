const polishAlphabet = ["ą", "ć", "ę", "ó", "ś", "ź"];


var resAlphabet = polishAlphabet.reduce((acc, c, i) => {
    return acc.concat([polishAlphabet.slice(i, i + 2)]);
}, []);


console.log(resAlphabet)