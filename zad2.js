// "2) Utwórz funkcję, która jako argument przyjmie trzy liczby.
// Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że
// z podanych długości nie można utworzyć trójkąta prostokątnego"

const buildTriangleRectangular = (a, b, c) => {
  return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) ? true : false;
};
console.log(
  `Task 2: Can you build a rectangular triangle: ${buildTriangleRectangular(
    3,
    4,
    5
  )}`
);
