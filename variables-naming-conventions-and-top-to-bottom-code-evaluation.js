let customerName = "Alice"; 
let numberOfItems = 5; 
let pricePerItem = 4; 
let totalCost = numberOfItems * pricePerItem; 
let storeName = "KMart"; 
let purchaseSummary = customerName + " bought " + numberOfItems + " items from " + storeName + " for $" + totalCost + ".";
console.log(purchaseSummary);

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
    Meaningful variable names are essential because they improve code readability, reduce confusion, and serve as built-in documentation. 
  - What are the common pitfalls to avoid when naming variables?
    When naming variables, it is important to avoid common pitfalls such as using vague names, inconsistent styles, or failing to follow standard conventions like camelCase.
  - How do clear variable names benefit team collaboration?
    Clear and consistent naming is particularly beneficial for team collaboration, as it allows multiple developers to understand, maintain, and work on the same codebase more effectively.
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);