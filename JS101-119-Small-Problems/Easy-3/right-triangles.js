/* 
  Write a function that takes a positive integer, n, as an argument and logs
  a right triangle whose sides each have n stars. The hypotenuse of the 
  triangle (the diagonal side in the images below) should have one end at 
  the lower-left of the triangle, and the other end at the upper-right.
*/

triangle(5);

/* 
    *
   **
  ***
 ****
*****
*/

triangle(9);

/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

function triangle(sideLength) {
  let numSpaces = sideLength - 1;
  let numStars = 1;
  while (numSpaces >= 0) {
    console.log(" ".repeat(numSpaces) + "*".repeat(numStars));
    numSpaces -= 1;
    numStars += 1;
  }
}