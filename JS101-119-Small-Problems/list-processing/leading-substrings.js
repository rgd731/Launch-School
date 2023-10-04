console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(str) {
  return str.split("").map((char, index) => {
    return str.slice(0,index + 1);
  })
}
