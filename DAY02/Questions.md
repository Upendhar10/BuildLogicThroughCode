# DAY - 02

1. **Program to Check Whether the Number is Odd or Even:**

   Write a program that checks whether a number entered by the user is odd or even. For example:

   - **Input:** **`Enter a number: 7`**
   - **Output:** **`7 is an odd number`**

2. **Program to Check Whether the Number is Divisible by 5:**

   Write a program that determines if a number entered by the user is divisible by 5. For example:

   - **Input:** **`Enter a number: 25`**
   - **Output:** **`25 is divisible by 5.`**

3. **Program to Check Whether the Number is a Multiple of 7:**

   Write a program that verifies if a number entered by the user is a multiple of 7. For example:

   - **Input:** **`Enter a number: 14`**
   - **Output:** **`14 is a multiple of 7.`**

---

# NOTES

## Taking Input from the user in NodeJs Environment

- Node.js provides several methods for receiving input from users, including reading from standard input (stdin), command-line arguments, and user prompts.

  ### Using readline-sync

  - This module is used to receive input from the user synchronously, ensuring program execution line by line.

  command : npm install readline-sync

  #### Importing the module

  const readline = require("readline-sync");

  #### Enter the number

  ```javascript
  let a = Number(readline.question());
  let number = [];
  for (let i = 0; i < a; ++i) {
    number.push(Number(readline.question()));
  }
  console.log(number);
  ```

  #### Output

  2
  1
  2
  [1,2]
