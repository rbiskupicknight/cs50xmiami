/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/
var word = process.argv[2];
if (word.length < 3){
  console.log(word)
}
else {
  var message = verbing(word)
  console.log(message)
}
function verbing(word) {
  var ending = word.substr(-3, 3);
  if (ending == "ing")
  {
    return(word + "ly")
  }
  else{
  return(word + "ing")
}
}
