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

const GenerateHuman = () => {
  const pickHuman = () => {
    return humans[Math.floor(Math.random() * humans.length)];
  };

  const nameHuman = pickHuman();

  const generateEmail = () => {
    const pickDomain = mailDomain[
      Math.floor(Math.random() * mailDomain.length)
    ].toLowerCase();
    return `${nameHuman.name + nameHuman.surname}@${pickDomain}`;
  };

  const randomAge = () => {
    const minAge = 18;
    const maxAge = 85;
    return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
  };

  const oneOf = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
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
    country: oneOf(["PL", "UK", "USA"]),
    phone: phoneNr(),
    _id: objectId
  };
};

console.log("Task 8:", GenerateHuman());
