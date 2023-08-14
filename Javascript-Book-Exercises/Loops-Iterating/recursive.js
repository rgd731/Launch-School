function doubler(number) {  
    if (number <= 50) {
      console.log(number);
      doubler(number * 2);
    }
  }
  
  doubler(5); // => 5
              // => 10
              // => 20
              // => 40
              // => 80