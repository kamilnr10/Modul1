// 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), country:oneOf([PL,UK,USA])}
// losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

const randomAge = () => {
    return Math.floor(Math.random() * 68) + 18;
};
const countryArray = ["PL", "UK", "USA"];
const oneOf = countryArray[Math.floor(Math.random() * countryArray.length)];
const phoneNr = () => {
    return Math.random().toString().slice(2, 11);
}

const GenerateHuman = function (name, surname) {
    this.name = name;
    this.surname = surname;
    this.email = `${name}@${surname}`.toLowerCase();
    this.age = randomAge();
    this.country = oneOf;
    this.phone = phoneNr();
};

const human = new GenerateHuman("Tomek", "Omega");