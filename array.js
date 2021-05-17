var guestList = ["Abbasi", "Turk", "Khan", "Mongol"];
var guestName = prompt("Enter your Name Please");
if (guestList.includes(guestName)){
  alert("Your Welcome");
} else {
  alert("Sorry, may be next time");
}

//adding elements and intermediate array// *Push* it always push the items which you have in the parenthenses to the end of the
/*array it doesnt push randomly into the array or at the begining its always tagged on at the end*/
/*related function pop, pop items off your array by using array.pop it take the item from the end of arrays*/
var output = [];
var count = 1;
function fizzBuzz() {
if(count % 3 === 0 && count % 5 === 0){
  output.push("fizzBuzz");
} else if (count % 3 === 0){
  output.push("fizz");
} else if (count % 5 === 0){
  output.push("Buzz");
} else {
  output.push(count);
}
 count++;
console.log(output);
}
/* random person name */
var name = ["jane", "kate", "tom", "jerry", "feddy", "rose"];
function whoispaying(name) {
  var numberofPeople = name.length;
  var randomPersonposition = Math.floor(Math.random() * numberofPeople);
  var randomperson = name[randomPersonposition];

  return randomperson + " is going to buy lunch today!";
}
