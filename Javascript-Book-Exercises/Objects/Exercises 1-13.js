/* 1. Given the following code, how can you access the name of the person? */

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
console.log(person.name);

/* 2. Which of the following values are valid keys for an object? 

1               // Valid
'1'             // Valid
undefined       // Valid
'hello world'   // Valid
true            // Valid
'true'          // Valid
*/

/* 3. Use object literal syntax (e.g., { key: value, ... } notation) to 
  create an object that behaves as an array in a for statement. The 
  object should contain at least 3 elements. You should place your 
  code between the braces in the let statement: */

let myArray = {
  2: "8",
  1: [4],
  0: 9,
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

/* 4. Create an array from the keys of the object obj below,with all of the
   keys converted to uppercase. Your implementation must not mutate obj. */

 let obj = {
  b: 2,
  a: 1,
  c: 3,
};

myArray = Object.keys(obj);
myArray = myArray.map(element => element.toUpperCase());
console.log(myArray);

/* 5. Create a new object named myObj that uses myProtoObj as its prototype. */

let myProtoObj = {
    foo: 1,
    bar: 2,
};

myObj = Object.create(myProtoObj);

/* 6. Which of the following values are primitive values? Which are objects? Which are neither?

"foo"               // primitive, string
3.1415              // primitive, number
[ 'a', 'b', 'c' ]   //object, array
false               //primitive, boolean
foo                 //neither, identifier
function bar() { return "bar"; }  //object, function
undefined           //primitive, undefined
{ a: 1, b: 2 } */   //object



/* 7. Add a qux property with value 3 to the myObj object we created in
   the previous exercise. */
myObj.qux = 3;
   
//Now, examine the following code snippets: 

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
    console.log(key);
}

/* Without running this code, can you determine whether these two snippets produce the same output? Why? */

//No, because the for loop prints all keys while Object.keys only selects keys that are not inherited


/* 8. Create a function that creates and returns a copy of an object. The function should take two arguments:
   the object to copy and an array of the keys that you want to copy. Do not mutate the original object.
   
   The function should let you omit the array of keys argument when calling the function. If you do omit the argument,
   the function should copy all of the existing keys from the object. */

function copyObj(object,keyArray) {
  let newObj = {};
  if (typeof keyArray !== 'undefined') {
    keyArray.forEach(key => {
    newObj[key] = object[key];
  });
    return newObj; 
  } else {return object}
}

let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
  let newObj = copyObj(objToCopy);
  console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);       // => { foo: 1, qux: 3 }
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);       // => { bar: 2 }

/* 9. What does the following program log to the console? Why? */

let foo = {
    a: 'hello',
    b: 'world',
  };
  
let qux = 'hello';
  
function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); //Logs 'hi' because object properties can be mutated by functions since objects are mutable
console.log(qux);   //Log 'hello' since strings are immutable bar() did not mutate qux


/* 10. How many primitive values are there in the following expression? Identify them. 
   How many objects are there in the expression? Identify those objects. 
  [1, 2, ["a", ["b", false]], null, {}] */

//primitives: 1,2,"a","b",false,null
//objects: 3 arrays and an object

/* 11. Write some code to replace the value 6 in the following object with 606: */

obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

obj.bar[3].xyz=606;

/* 12. Consider the following code: */

foo = function (bar) {
  console.log(bar, bar, bar);
}
bar = foo; //answer to 12.
  
foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

/* As written, this code will raise an error on line 6. Without creating 
   a new function or changing lines 5 or 6, update this code to work as intended. */



/* 13. Consider the following code: */

foo = function(bar) {
  console.log(bar());
}
  
foo();   // Should print 'Welcome'
foo();  // Should print 3.1415
foo();    // Should print [1, 2, 3]

/* As written, this code will raise an error on line 5. Without
   modifying foo, update this code to print the desired text. */

foo(function(){return "Welcome"});
foo(function(){return 3.1415});  
foo(function(){return [1,2,3]});    
