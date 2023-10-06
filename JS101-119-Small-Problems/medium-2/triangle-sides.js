console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

function triangle(side1,side2,side3) {  
  let perimeter = side1 + side2 + side3;
  let longestSide = Math.max(side1,side2,side3);
  let shortestSide = Math.min(side1,side2,side3);
  let middleSide = perimeter - longestSide - shortestSide;
  if (shortestSide <= 0 || ((shortestSide + middleSide) < longestSide)) return "Invalid"

  if (side1 * 3 === perimeter) {
    return "equilateral";
  }else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    return "scalene";
  } else {
    return "isosceles";
  }
}