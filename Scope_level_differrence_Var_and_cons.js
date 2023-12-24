var greet = "Morining buddies";
if (1 == 1) {
    //Due to var keyword its replacebale
  var greet = "Evening buddies";
}
console.log(greet);

function sum(a, b) {
  return a + b;
}
let add = 5 + 6;
console.log("The sum is: ", add);




//Know understand let both global level and class level
let greet2 = "Morining buddies hope you are doing well";
if (1 == 1) {
    //You can not access it as its in inside due to let
  let greet2 = "Evening buddies hope you are doing great";
}
console.log(greet2);

function sum(a, b) {
  return a + b;
}
let add2 = 5 + 6;
console.log("The sum is: ", add2);


//You cannot reinitialize Const