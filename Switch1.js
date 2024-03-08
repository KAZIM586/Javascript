//Question:- 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.

// Ans:1

const days = "Monday";
let daysUntilWeekend;

switch(days){
    
    case "Monday":
        console.log("There are 5 day's until the weekend.");
        break;

    case "Tuesday":
        console.log("There are 4 day's until the weekend.");
        break;

    case "Wednesday":
        console.log("There are 3 day's until the weekend.");
        break;

    case "Thursday":
        console.log("There are 2 day's until the weekend.");
        break;

    case "Friday":
        console.log("There are 1 day's until the weekend.");
        break;

    case "Saturday":
    case "Sunday":
        console.log("There are 0 day's until the weekend.");
        break;
    default:
        daysUntilWeekend ="Invalid day";
        break;
}