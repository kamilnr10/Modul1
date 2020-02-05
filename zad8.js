// 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), country:oneOf([PL,UK,USA])}
// losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

const peopleGroup = [
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

const generators = {
  pickHuman() {
    return peopleGroup[Math.floor(Math.random() * peopleGroup.length)];
  },

  generateEmail() {
    const randomDomain = mailDomain[
      Math.floor(Math.random() * mailDomain.length)
    ].toLowerCase();
    return `${this.pickHuman().name +
      this.pickHuman().surname}@${randomDomain}`.toLowerCase();
  },

  randomAge() {
    return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
  },

  oneOf() {
    return country[Math.floor(Math.random() * country.length)];
  }
};

const generateHuman = data => {
  const phoneNr = () => {
    return Math.random()
      .toString()
      .slice(2, 11);
  };
  const objectId = uuidv4();

  return {
    name: data.pickHuman().name,
    surname: data.pickHuman().surname,
    email: data.generateEmail().toLowerCase(),
    age: data.randomAge(),
    country: data.oneOf(),
    phone: phoneNr(),
    _id: objectId
  };
};

console.log("Task 8:", generateHuman(generators));
