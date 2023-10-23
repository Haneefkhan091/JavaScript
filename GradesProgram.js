// Prompt the user to enter a score
var score = parseInt(prompt("Enter the student's score:"));

// Initialize a variable to store the grade
var grade;

// Use a switch-case statement to determine the grade
switch (true) {
  case score >= 90:
    grade = 'A';
    break;
  case score >= 80:
    grade = 'B';
    break;
  case score >= 70:
    grade = 'C';
    break;
  case score >= 60:
    grade = 'D';
    break;
  default:
    grade = 'F';
    break;
}

// Display the grade to the user
console.log(`The student's grade is: ${grade}`);
