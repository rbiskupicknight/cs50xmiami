/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 10;
var pi = 3.141592;
var circumference = (2 * pi) * radius;
var area = pi * (radius * radius);

console.log("The circumference is " + circumference + " ");
console.log("The area is " + area + " ");
