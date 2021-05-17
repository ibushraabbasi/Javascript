/* loop work under the condition until it prove false */
var output = [];
var count = 1;
function fizzBuzz() {
  while(count <= 100){
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
}
console.log(output);
}
/* new while loop */
var count = 100;
function beer(){
  while (count >= 1){
    if(count === 1){
      return count + "bottols is beer";
    } else {
      return " 0 bottels of beer go to mart buy it";
    }
    count--;
  }
  console.log(count);
}

var no = 100;
function beer(){
  while (no >= 0) {
    if(no  === 0 ) {
    }
    console.log(no + " " + "bottle" + " of beer on the wall");
    no--;
  }
}
/* for and while loop work same */
