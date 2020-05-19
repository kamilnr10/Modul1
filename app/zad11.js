// Zadanie 10
// korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter)
// filtrowanie arraya z obiektami po stringu, tak aby 0 znaków w filtrze oznaczało cały array
//  jeśli od 0 do 3 to ma nic nie filtrować, a powyżej 3 ma filtrować po każdym kluczu w obiekcie

const animals = [
  {
    name: "Tofik",
    breed: "Native American Indian Dog",
    owner: {
      id: 1,
      name: "Kamil"
    }
  },
  {
    name: "Logan",
    breed: "Golden Retriever",
    owner: {
      id: 2,
      name: "Tomek"
    }
  },
  {
    name: "Lexus",
    breed: "Siberian Husky",
    owner: {
      id: 3,
      name: "Bogdan"
    }
  },
  {
    size: "Medium",
    age: 6
  }
];

const filterWith = (arr, filter) => {
  if (filter.length > 0 && filter.length < 3) {
    return [];
  } else if (filter.length === 0) {
    return arr;
  } else {
    return arr.filter(item => {
      if (filter.length >= 3) {
        return JSON.stringify(item).includes(filter) ? item : null;
      }
    });
  }
};

console.log("Task 11: Filter with key:", filterWith(animals, "name"));
