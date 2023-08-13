/* 3. What happens when you run the following program? Why do we get that result? */

{
    let foo = 'bar';
}

console.log(foo); //foo is undefined as there is technically no variable named foo in the global scope.

/* 4. What happens when you run the following code? Why? */

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe'; //Throws an error since you cannot reassign a constant.
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME); 

/* 5. Take a look at this code snippet:
   What does this program log to the console? Why? */

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); //logs 'bar' as that's the global variable value. foo='qux' goes out of scope when it get to console.log()

/* 6. Will this program produce an error when run? Why or why not? */

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); //no error, as both FOO declarations are in their own scope.



