console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
if(count < 0) count = count * -1;

if(count % 2 == 0)
{
    console.log(count);
}
}
printOdds(-2);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if(age >= 16){
        console.log(aboveSixteen);
    }
    else{
        if(age < 16){
            console.log(belowSixteen);
        }
    }
}
checkAge("Jacob",12);
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y){
    let quadrantOne = `${x},${y} are on quadrant one`;
    let quadrantTwo = `${x},${y} are on quadrant two`;
    let quadrantThree = `${x},${y} are on quadrant three`;
    let quadrantFour = `${x},${y} are on quadrant four`;
    if(x > 0 && y > 0){
        console.log(quadrantOne);
    }
    else if(x < 0 && y > 0){
        console.log(quadrantTwo);
    }
    else if(x < 0 && y < 0){
        console.log(quadrantThree);
    }
    else if(x > 0 && y < 0){
        console.log(quadrantFour);
    }       
}
whichQuadrant(1,-2);
whichQuadrant(1,1);
whichQuadrant(-5,10);
whichQuadrant(-15,-2);

console.log("EXERCISE 4:\n==========\n");
function triangleTypes(a,b,c){
    
    if(a + b <= c || a + c <= b || b + c <= a){
        console.log("This is an invalid triangle.");
    }
    else if(a == b && b ==c){
        console.log("This triangle is an equilateral triangle.");
    }
    else if(a == b|| b == c|| a == c){
        console.log("This triangle is an isosceles triangle.");
    }
    else{
        console.log("This triangle is a scalene triangle");
    }
}
triangleTypes(1,1,2);

console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage){
    let userAverage = usage/day;
    let standardAverage = planLimit/30;
    let daysRemaining = 30 - day;
    let exceedingAvg = (userAverage * 30)-(standardAverage * 30);
    let remainingAvg = (planLimit-usage)/daysRemaining;
    function aboveOrBelowAvg(userAverage,standardAverage){
        if (userAverage > standardAverage){
            console.log(`You are EXCEEDING our average daily use (${userAverage.toFixed(2)}GB/day), continuing this high usage, you'll exceed your data plan by ${exceedingAvg.toFixed(2)}. To stay below your data plan, use no more than ${remainingAvg.toFixed(2)}GB/day.`);
        }else{
            console.log(`Good job! You are below our daily average! (${standardAverage.toFixed(2)}GB/day). Your current average is ${userAverage.toFixed(2)}GB/day.`);
        }
        
    }
    aboveOrBelowAvg(userAverage,standardAverage);
}
dataPlanStatus(100, 15, 12);