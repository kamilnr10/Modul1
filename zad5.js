// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która
// jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy.
// Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."
const words = [
    "ala",
    "tomek",
    "gosia",
    "bartek",
    "ola",
    "jan",
    "ewelina",
    "stefania",
    "kamil",
    "adrian",
    "wojtek",
    "kuba",
    "piotrek",
    "karol",
    "amelia"
];
const index = txt => {
    const search = words.indexOf(txt);
    if (search !== -1) {
        console.log(`Szukany wyraz to ${txt} a index to ${search}`);
    } else {
        console.log(`Szukany wyraz nie istnieje`);
    }
};
console.log(index("ala"));