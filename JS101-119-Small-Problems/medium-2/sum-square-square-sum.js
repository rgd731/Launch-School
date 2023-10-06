console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


function sumSquareDifference(count) {
  let sequence = [];

  for (let int = 1;int <= count;int++) {
    sequence.push(int);
  }

  let sum = 0;
  let squaredSum = 0;
  sequence.forEach(num => {
    sum += num;
    squaredSum += num ** 2
  })
  let sumSquared = sum ** 2;


  return sumSquared - squaredSum;
}