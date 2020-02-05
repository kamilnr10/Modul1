// 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), country:oneOf([PL,UK,USA])}
// losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

const humans = [
  {
    name: "Dianna",
    surname: "Bates"
  },
  {
    name: "Angelita",
    surname: "Walls"
  },
  {
    name: "Sykes",
    surname: "York"
  }
];

const mailDomain = ["gmail.com", "onet.pl", "wp.pl"];

const minAge = 18;
const maxAge = 85;

const country = ["PL", "UK", "USA"];

const GenerateHuman = (array, domains, ageMin, ageMax, country) => {
  const pickHuman = () => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const nameHuman = pickHuman();

  const generateEmail = () => {
    const pickDomain = domains[
      Math.floor(Math.random() * domains.length)
    ].toLowerCase();
    return `${nameHuman.name + nameHuman.surname}@${pickDomain}`;
  };

  const randomAge = () => {
    return Math.floor(Math.random() * (ageMax - ageMin + 1) + ageMin);
  };

  const oneOf = () => {
    return country[Math.floor(Math.random() * country.length)];
  };

  const phoneNr = () => {
    return Math.random()
      .toString()
      .slice(2, 11);
  };
  const objectId = uuidv4();

  return {
    name: nameHuman.name,
    surname: nameHuman.surname,
    email: generateEmail().toLowerCase(),
    age: randomAge(),
    country: oneOf(),
    phone: phoneNr(),
    _id: objectId
  };
};

console.log("Task 8:", GenerateHuman(humans, mailDomain, 18, 85, country));
