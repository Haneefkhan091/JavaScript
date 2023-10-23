let q = 0;
while (q < 10) {
  q++;
  console.log(q);
}

for (k = 0; k < 10; k++) {
  console.log(k);
}

//Get the number that is commanly retrieveable 2 and 5 means 2*5=10 and 5*2=10 in for loop

// Find numbers that are divisible by both 2 and 5 in a for loop
for (let k = 1; k < 10; k++) {
    if (k % 2 === 0 && k % 5 === 0) { 
      console.log(k);
    }
  }
  
