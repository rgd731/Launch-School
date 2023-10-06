minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

function minilang(program) {
  let stack = [];
  let register = 0;
  let instructions = program.split(" ");

  instructions.forEach(instruction => {
    switch (instruction) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        register += stack.pop();
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "REMAINDER":
        register %= stack.pop();
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(instruction);
    }
  })

}

// Understand the problem
  // Input: "Program" or string that serves as instructions word by word
  // Output: No real return value but function can print to the console

  // Explicit:
    // Use a "stack" or array to store certain values that have been "pushed"
      // "stack" can be implemented using an array with .pop and .push methods
    // Use a "register" or variable that stores a current value
    // Use the "program" as instructions to do manipulate stack and register
      // Instructions separated by spaces
    // Instructions include arithmetic operations like ADD, SUB, MULT, DIV, REMAINDER
      // These arithmetic operations pop a value from the "stack" and act on that element and register
      // DIV will only store the integer portion of a division
      // Result of the operation is stored in register
    // This "language" will only act on integers
    // Instructions also include ones that manipulate "stack" and "register" like PUSH, POP
      // Coming across a number in the "program" will result in the register storing that value
    // "Program" will only have the stated instructions
    // When PRINT is encountered in "program" print to console the register value
    // Initialize stack as empty array and register with value of 0

  // Implicit:

// Data Structures
  // Array to implement "stack"
  // Possibly use array to store and act on string "program"

// Algorithm
  // Initialize "stack" and "register" and set to [] and 0 respectively
  // Turn "program" or string into an array of instructions
  // Iterate through "program" array
    // Check what instruction we are currently on
    // Look for what that instruction does
      // Implement instructions based on this list;
        // n : Place a value, n, in the register. Do not modify the stack.
        // PUSH : Push the register value onto the stack. Leave the value in the register.
        // ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
        // SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
        // MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
        // DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
        // REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
        // POP : Remove the topmost item from the stack and place it in the register.
        // PRINT : Print the register value.
    // Execute that instruction
    // Move on to next instruction
