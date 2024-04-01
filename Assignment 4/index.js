"use strict";
// Q no. 1 -  Declare a variable named greeting with the string value "Hello, World!" and print it.
// Answer
let greeting = "Hello, World!";
console.log(greeting);
// --------------------------------------------------------------------------------------------------
// Q no. 2 -  Define two variables with integer values and calculate their sum, difference, product, and quotient.
// Answer
let num1 = 10, num2 = 5;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
// --------------------------------------------------------------------------------------------------
// Q no. 3 -  Swap the values of two variables without using a third variable.
// Answer
let a = 1, b = 2;
console.log("Before swap:", "a =", a, "b =", b);
let c;
c = a;
a = b;
b = c;
console.log("After swap:", "a =", a, "b =", b);
// --------------------------------------------------------------------------------------------------
// Q no. 4 -  This applies to TypeScript. Create a string variable and try changing its type.
// Answer
let message;
message = "Hello";
//message = 14;
// --------------------------------------------------------------------------------------------------
// Q no. 5 -  Use the modulus operator to find the remainder of two numbers.
// Answer
let num4 = 10, num5 = 3;
console.log("Remainder:", num4 % num5);
// --------------------------------------------------------------------------------------------------
// Q no. 6 -  Increment a variable's value by 1 using two different methods.
// Answer
let counter = 0;
counter++;
counter += 1;
console.log("Incremented value:", counter);
// --------------------------------------------------------------------------------------------------
// Q no. 7 -  Given three boolean variables, write expressions for AND, OR, and NOT gates.
// Answer
let x = true, y = false, z = true;
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !z);
// --------------------------------------------------------------------------------------------------
// Q no. 8 -  Show examples of using compound assignment operators.
// Answer
let num = 10;
num += 5;
console.log("+=:", num);
num -= 3;
console.log("-=:", num);
num *= 2;
console.log("*=:", num);
num /= 4;
console.log("/=:", num);
// --------------------------------------------------------------------------------------------------
// Q no. 9 -  Write a program to check if a number is even or odd.
// Answer
let numb = 11;
if (numb % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
// --------------------------------------------------------------------------------------------------
// Q no. 10 -  Check if a person is eligible to vote.
// Answer
let age = 25;
if (age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}
// --------------------------------------------------------------------------------------------------
// Q no. 11 -  Assign a grade based on a numerical score.
// Answer
let score = 75;
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80) {
    console.log("Grade B");
}
else if (score >= 70) {
    console.log("Grade C");
}
else if (score >= 60) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}
// --------------------------------------------------------------------------------------------------
// Q no. 12 -  Find the maximum of three numbers.
// Answer
let l = 5, m = 10, n = 7;
let max = Math.max(l, m, n);
console.log("Max:", max);
// --------------------------------------------------------------------------------------------------
// Q no. 13 -  Check if a given year is a leap year.
// Answer
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
}
else {
    console.log(year + " is not a leap year");
}
// --------------------------------------------------------------------------------------------------
// Q no. 14 -  Write a program that converts temperature from Fahrenheit to Celsius.
// Answer
let fahrenheit = 80;
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Celsius:", celsius.toFixed(2));
// --------------------------------------------------------------------------------------------------
// Q no. 15 -  Check if a number is positive, negative, or zero.
// Answer
let number = -5;
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// --------------------------------------------------------------------------------------------------
// Q no. 16 -  Write a program that prints the multiplication table of a given number up to 10.
// Answer
let numbe = 5;
for (let i = 1; i <= 10; i++) {
    console.log(numbe + " x " + i + " = " + numbe * i);
}
// --------------------------------------------------------------------------------------------------
