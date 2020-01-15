// 7) arraye mają zbudowane metody .map .filter i .reduce.
//  Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację funkcji wbudowanych,
// Twoje funkcje mają działać tak samo jak te wbudowane

function map(arr, mapFunc) {
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i], i, arr);
        mapArr.push(result);
    }
    return mapArr;
}

function filter(arr, filterFunc) {
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = filterFunc(arr[i], i, arr);
        if (result) filterArr.push(arr[i]);
    }
    return filterArr;
}

function reduce(arr, reducer, initialValue) {
    let acc = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < arr.length; i++) acc = reducer(acc, arr[i], i, arr);
    return acc;
}