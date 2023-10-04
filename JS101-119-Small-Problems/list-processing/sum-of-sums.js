console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

function sumOfSums(numArr) {
  let sumsArr = [];

  numArr.forEach((num, index) => {
    sumsArr.push(...numArr.slice(0,index + 1))
  })

  return sumsArr.reduce((acc, num) => {
    return acc + num;
  },0)
}
