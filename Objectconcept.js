let job = {
  day1: "Monday",
  day2: "Tuesday",
  day3: "Wedsday",
  day4: "Thursday",
};

console.log(job);
job.day1 = "Sunday";
console.log(job);
job.day1["includes"];
// console.log(job.day1["Haneef"]);
delete job.day4;
console.log(job)
for (key in job){
    if (typeof job[key] === 'string'){
        console.log(`${key}: ${job[key]}`)

    }

}

console.log('day4' in job)
