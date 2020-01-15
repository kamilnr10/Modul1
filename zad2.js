// "2) Utwórz funkcję, która jako argument przyjmie trzy liczby.
// Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że
// z podanych długości nie można utworzyć trójkąta prostokątnego"
const triangle = (a, b, c) => {
    if (a ** 2 + b ** 2 === c ** 2) return true;
    else return false;
};
console.log(triangle(3, 4, 5));