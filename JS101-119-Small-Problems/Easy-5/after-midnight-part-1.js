console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

function timeOfDay (minsAfterMidnight) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

  minsAfterMidnight = minsAfterMidnight % MINUTES_IN_DAY;
  if (minsAfterMidnight < 0) {
    minsAfterMidnight += MINUTES_IN_DAY;
  }

  let hrsAfterMidnight = Math.floor(minsAfterMidnight / MINUTES_IN_HOUR);
  minsAfterMidnight = minsAfterMidnight % MINUTES_IN_HOUR;

  return `${padZeroes(hrsAfterMidnight)}:${padZeroes(minsAfterMidnight)}`;
}


function padZeroes(num) {
  if (num < 10) {
    return '0' + String(num)
  } else {
    return num;
  }
}