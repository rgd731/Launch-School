console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

function sum (integer) {
  let numArr = String(integer).split("");

  return numArr.reduce((acc, num) => acc += Number(num),0);
}