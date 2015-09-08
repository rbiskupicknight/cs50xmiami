/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

var first_word = process.argv[2];
var second_word = process.argv[3];
var combination = mixUp(first_word, second_word);
console.log(combination);

function mixUp(a, b) {
  var temp_aa = a[0];
  var temp_ab = a[1];
  var new_a = a.replace(a[0], b[0]).replace(a[1], b[1]);
  var new_b = b.replace(b[0], temp_aa).replace(b[1], temp_ab);
  return(new_a + " " + new_b);
}
