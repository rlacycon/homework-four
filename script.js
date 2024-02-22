// Problem 1
function enterAge() {
    var birthYear = document.getElementById ('ageInput').value;
    var result = document.getElementById('generationResult')

    switch (true) {
        case (birthYear >= 1946 && birthYear <= 1964):
            result.innerHTML = "You are a member of the Baby Boomer Generation!";
            break;
        case (birthYear >= 1965 && birthYear <= 1980):
            result.innerHTML = "You are part of Generation X!";
            break;
        case (birthYear >= 1981 && birthYear <= 1996):
            result.innerHTML = "You belong in the Y Generation!";
            break;
        case (birthYear >= 1997 && birthYear <= 2012):
            result.innerHTML = "Generation Z is your generation!";
            break;
        case (birthYear >= 2013 && birthYear <= 2025):
            result.innerHTML = "You are part of Generation Alpha.";
            break;
        default:
            result.innerHTML = "Sorry - your generation is not listed.";
            break;
    }
}

// Problem 2
var values = [87, 56, 92, 77];
var valuesTotal = values[0] + values[1] + values[2] + values[3];
var valuesAverage = valuesTotal / values.length;

if (valuesAverage > 75) {
    document.getElementById('gradeResult').innerHTML = "You are in the top 25% of the class!";
}
else if (valuesAverage >= 60 && valuesAverage <= 75) {
    document.getElementById('gradeResult').innerHTML = "You passed the class!";
}
else {
    document.getElementById('gradeResult').innerHTML = "Sorry - you did not pass the class. Better luck next time!";
}

// Problem 3
function randomNum() {
    var randomNum = Math.floor(Math.random() * 5) + 1;
    var explaination = "";

    if (randomNum == 1) {
        explaination = "The lowest number you can get";
    }
    else if (randomNum == 2) {
        explaination = "This is the lowest eve uber you can get";
    }
    else if (randomNum == 3) {
        explaination = "Right smack in the middle";
    }
    else if (randomNum == 4) {
        explaination = "Good number!";
    }
    else if (randomNum == 5) {
        explaination = "Way to roll!";
    }
    else {
        explaination = "you should not be seeing this message. You somehow broke this simple if else statement.";
    }

    document.getElementById('randomResult').innerHTML = randomNum + ": " + explaination;
}

// Problem 4
function findFutureDay() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = document.getElementById('currentDay').value;
    var daysAhead = 5;

    switch (currentDay) {
        case("Sunday"):
            userInput = "It will be "+ weekday[(0 + daysAhead) % 7] + " in " + daysAhead + " days.";
            break;
        case("Monday"):
            userInput = "It will be "+ weekday[(1 + daysAhead) % 7] + " in " + daysAhead + " days.";
            break;
        case("Tuesday"):
            userInput = "It will be "+ weekday[(2 + daysAhead) % 7] + " in " + daysAhead + " days.";
            break;
        case("Wednesday"):
            userInput = "It will be "+ weekday[(3 + daysAhead) % 7] + " in " + daysAhead + " days.";
            break; 
        case("Thursday"):
            userInput = "It will be "+ weekday[(4 + daysAhead) % 7] + " in " + daysAhead + " days.";
            break;
        case("Friday"):
            userInput = "It will be "+ weekday[(5 + daysAhead) % 7] + " in " + daysAhead + " days.";
            break;
        case("Saturday"):
            userInput = "It will be "+ weekday[(6 + daysAhead) % 7] + " in " + daysAhead + " days.";
            break;
        default:
            userInput = "i somehow broke the switch statement. I do not know what is wrong with me.";
            break;
    }
    document.getElementById('futureDayResult').innerHTML = userInput;
}

// Problem 5
var colorChoices = document.getElementById('colors').innerHTML;
var colorList = colorChoices.split(" ");

document.getElementById('favColorResult').innerHTML = "My favorite color is " + colorList[4] + ".";