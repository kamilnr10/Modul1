// "2) Utwórz funkcję, która jako argument przyjmie trzy liczby.
// Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że
// z podanych długości nie można utworzyć trójkąta prostokątnego"

const isTriangleRectangular = (a, b, c) => {
  if (!a || !b || !c) {
    throw new Error('3 inputs are needed')
  } else if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    a < 0 ||
    b < 0 ||
    c < 0) {
    throw new Error('Inputs should be positive Numbers')
  } else if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
    return true
  } else return false

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