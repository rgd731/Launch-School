const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);


function afterMidnight (time) {
  let = [hours,minutes] = timeAsNumbers(time);

  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  return totalMinutes % MINUTES_PER_DAY;
}

function beforeMidnight (time) {
  let totalMinutes = MINUTES_PER_DAY - afterMidnight(time);
  if (totalMinutes / MINUTES_PER_DAY > 0) {
    totalMinutes %= MINUTES_PER_DAY;
  }
  return totalMinutes;
}

function timeAsNumbers (timeStr) {
  return timeStr.split(':').map(num => Number(num));
}

