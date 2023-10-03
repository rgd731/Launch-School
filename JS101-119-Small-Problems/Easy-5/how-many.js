let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

function countOccurrences(vehicles) {
  let occurences = {};

  vehicles.forEach(vehicle => {
    if (occurences.hasOwnProperty(vehicle)) {
      occurences[vehicle] += 1;
    } else {
      occurences[vehicle] = 1;
    }
  })

  Object.entries(occurences).forEach(pair => {
    let vehicleType = pair[0];
    let vehicleOccurence = pair[1];
    
    console.log(`${vehicleType}: ${vehicleOccurence}`)
  })
}
