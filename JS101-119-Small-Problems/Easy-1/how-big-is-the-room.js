/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

*/
const readline = require('readline-sync');
const METERS_TO_FEET = 10.7639;

let length = Number(readline.question("Enter the length of the room in meters: "));
let width = Number(readline.question("Enter the width of the room in meters: "));
let squareMeters = length * width;


console.log(`The area of the room is ${squareMeters} square meters (${(squareMeters * METERS_TO_FEET).toFixed(2)} square feet).`);

