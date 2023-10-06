console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

function triangle(angle1,angle2,angle3) {
  let shortestAngle = Math.min(angle1,angle2,angle3);
  let largestAngle = Math.max(angle1,angle2,angle3);
  
  if ((angle1 + angle2 + angle3) !== 180 || shortestAngle <= 0) return "invalid"
  if (largestAngle === 90) return "right"
  if (largestAngle > 90) return "obtuse"
  if (largestAngle < 90) return "acute"
}