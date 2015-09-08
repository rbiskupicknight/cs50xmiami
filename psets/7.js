/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/
var word = process.argv[2];
var message = fixStart(word)
console.log(message)

function fixStart(s) {
  var first_letter = s[0]
  var first = new RegExp(first_letter,"g");
  var new_string = s.replace(first, "*").replace("*",first_letter)
  return(new_string)
}
