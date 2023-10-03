console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

function average (array) {
  let total = 0;

  array.forEach(int => {
    total += int;
  })

  let roundedDownAverage = Math.floor(total / array.length);

  return roundedDownAverage;
}