console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16)

function multiplyAllPairs(arr1, arr2) {
  let products = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[1] * arr2[j])
      products.push(arr1[i] * arr2[j]);
    }
  }

  return products.sort((a,b) => {
    return a - b;
  })
}