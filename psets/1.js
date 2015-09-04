/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var current_year = 2015;
var birth_year = 1988;
var age_old= current_year - birth_year;
var age_young = age_old - 1;

console.log("They are either " + age_old + " or " + age_young + " ")
