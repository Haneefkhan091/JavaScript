let arr = [24, 34, 32, 45, 43, 23];
console.log(arr);
console.log(arr.length);
splice = arr.slice(2, 3);
console.log(splice);
arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

arr.push(1, 2, 3, 4, 56, 7, 8);
arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

console.log(arr.includes(7));

let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  console.log("Sum of all array", sum);

  //   if (arr[i] > 30) {
  //     console.log("number greater than 30", arr[i]);
  //   }
}
console.log("Sum of all array", sum);

var logic = [23, 23, 23, 43, 534, 342, 43];
for (i = 0; i < logic.length; i++) {
  logic[i];

  if (logic[i] % 2 == 0) {
    console.log("even number", logic[i]);
  }
}

//Find duplicate in the array
var duplicate = [22, 12, 31, 3, 21, 31, 31, 31];
var duplicates = [];

for (var j = 0; j < duplicate.length - 1; j++) {
  for (var k = j + 1; k < duplicate.length; k++) {
    if (duplicate[j] === duplicate[k]) {
      duplicates.push(duplicate[j]);
      break;
    }
  }
}

if (duplicates.length > 0) {
  console.log("Duplicate numbers in the array:", duplicates);
} else {
  console.log("No duplicates found in the array.");
}

//Mapped Array
const originalArray = [1, 2, 3, 4, 5];

// Using the map() method to create a mapped array
const mappedArray = originalArray.map((number) => number * 2);

console.log("Mapped array", mappedArray); // Output: [2, 4, 6, 8, 10]

//Filtering an array using filter() method
let fruits = ["apple", "banana", "cherry", "date"];
let newFruitList = fruits.filter(
  (fruit) => fruit !== "banana" && fruit !== "date"
);
console.log(newFruitList);

// string to int and int to string

let day = "1";
let day2 = "2";
const result = parseInt(day2) - parseInt(day);
console.log("The result is", result);
console.log(result.toString());



