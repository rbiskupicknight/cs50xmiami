/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

var celcius_input = 7;
var fahrenheit_output = ((celcius_input * 9) / 5) + 32;
var fahrenheit_input = 84;
var celcius_output = ((fahrenheit_input - 32) * 5) / 9;

console.log("" + celcius_input + "°C is " + fahrenheit_output + "°F")
console.log("" + fahrenheit_input + "°F is " + celcius_output + "°C")
