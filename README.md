# TypeScript Type Error: Passing Array to String Function

This repository demonstrates a common type error in TypeScript: passing an array of strings to a function that expects a single string.

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file shows how to fix the type error by either changing the function signature to accept an array or iterating over the array and calling the function for each element. 

## Running the Code

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `tsc bug.ts` to compile the code and see the error message.
4. Run `tsc bugSolution.ts` to see the corrected code. 

This example highlights the importance of type checking in TypeScript to catch such errors during development.