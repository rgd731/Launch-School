console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


function maxRotation(num) {
  let count = String(num).length;

  while (count > 1) {
    num = rotateRightmostDigits(num, count);
    count -= 1;
  }

  return num;
}

function rotateRightmostDigits(number, count) {
  let numArr = String(number).split("")
  let subArr = [];

  for(let i = 0; i < count; i++) {
    let lastInt = numArr.pop();
    subArr.unshift(lastInt);
  }

  subArr = rotateArray(subArr);

  return Number(numArr.concat(subArr).join(""));
}

function rotateArray(arr) {
  if (arguments.length === 0 || !Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length === 0) return [];

  let rotatedArr = arr.slice();
  let firstElement = rotatedArr.shift();
  rotatedArr.push(firstElement);

  return rotatedArr;
}