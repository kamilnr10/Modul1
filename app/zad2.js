// "2) Utwórz funkcję, która jako argument przyjmie trzy liczby.
// Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że
// z podanych długości nie można utworzyć trójkąta prostokątnego"

const isTriangleRectangular = (a, b, c) => {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "number" &&
    a > 0 &&
    b > 0 &&
    c > 0
  )
    return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) ? true : false;
  else
    return `From the given arguments it is impossible to create a rectangular triangle `;
};
// console.log(
//   `Task 2: Can you build a rectangular triangle: ${isTriangleRectangular(
//     3,
//     4,
//     5
//   )}`
// );

// console.log(
//   `Task 2: Can you build a rectangular triangle: ${isTriangleRectangular(
//     0,
//     4,
//     5
//   )}`
// );

module.exports = isTriangleRectangular;
