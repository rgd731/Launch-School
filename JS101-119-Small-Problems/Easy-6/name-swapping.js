console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


function swapName(fullName) {
  let [firstName, lastName] = fullName.split(" ");

  return `${lastName}, ${firstName}`;
}