// Zadanie 10
// korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter)
// filtrowanie arraya z obiektami po stringu, tak aby 0 znaków w filtrze oznaczało cały array
//  jeśli od 0 do 3 to ma nic nie filtrować, a powyżej 3 ma filtrować po każdym kluczu w obiekcie

const ob = [
  {
    name: "Kamil",
    surname: "nowak"
  },
  {
    name: "Lexus",
    surname: "nowwawak"
  },
  {
    name: "Olga",
    surname: "alaka"
  },
  {
    name: "Ala",
    surname: "kowiq"
  }
];

const filterWith = (arr, filter) => {
  if (filter.length > 0 && filter.length < 3) {
    return [];
  } else
    return arr.filter(item => {
      if (filter.length >= 3) {
        return Object.keys(item).some(key => item[key].includes(filter));
      } else if (filter.length === 0) {
        return arr;
      }
    });
};
