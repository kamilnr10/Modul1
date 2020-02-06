// 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), country:oneOf([PL,UK,USA])}
// losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

const constants = {
  peopleGroup: [
    { name: "Dianna", surname: "Bates" },
    { name: "Angelita", surname: "Walls" },
    { name: "Sykes", surname: "York" }
  ],

  mailDomain: ["gmail.com", "onet.pl", "wp.pl"],

  country: ["PL", "UK", "USA"]
};

const generator = {
  pickHuman(data) {
    const peopleGroup = data.peopleGroup;
    return peopleGroup[Math.floor(Math.random() * peopleGroup.length)];
  },

  generateEmail(data) {
    const mailDomain = data.mailDomain;
    return mailDomain[Math.floor(Math.random() * mailDomain.length)];
  },

  randomAge(minAge, maxAge) {
    return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
  },

  oneOf(data) {
    const country = data.country;
    return country[Math.floor(Math.random() * country.length)];
  }
};

const generateHuman = (data, generators) => {
  const person = generators.pickHuman(data);
  const fullName = (person.name + person.surname).toLowerCase();
  const phoneNr = () => {
    return Math.random()
      .toString()
      .slice(2, 11);
  };
  const objectId = uuidv4();

  return {
    name: generators.pickHuman(data).name,
    surname: generators.pickHuman(data).surname,
    email: `${fullName}@${generators.generateEmail(data)}`,
    age: generators.randomAge(18, 85),
    country: generators.oneOf(data),
    phone: phoneNr(),
    _id: objectId
  };
};

console.log("Task 8:", generateHuman(constants, generator));
