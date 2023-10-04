let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

function transactionsFor (itemID, transactionsList) {
  return transactionsList.filter(transaction => transaction['id'] === itemID);
}

function isItemAvailable (itemID, transactionsList) {
  let itemTransactions = transactionsFor(itemID, transactionsList);
  let totalQuantity = 0;

  itemTransactions.forEach(transaction => {
    let quantity = transaction['quantity'];
    if (transaction['movement'] === 'in') {
      totalQuantity += quantity;
    } else {
      totalQuantity -= quantity;
    }
  });

  return totalQuantity > 0;
}