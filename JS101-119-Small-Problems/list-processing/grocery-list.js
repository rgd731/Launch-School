console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(groceryList) {
  let newList = [];

  groceryList.forEach(fruit => {
    let counter = 1;
    let fruitAmount = fruit[1]

    while (counter <= fruitAmount) {
      newList.push(fruit[0]);
      counter += 1;
    }
  })

  return newList;
}