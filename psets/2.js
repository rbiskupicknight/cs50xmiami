/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...

var age = 27;
var max_age = 107;
var daily_snack = 2;
var years_left = 107 - 27;
var yearly_snacks = 2 * 365;
var total_snacks = yearly_snacks * years_left;

console.log("You will need " + total_snacks + " to last you until the ripe old age of " + max_age + " ")
