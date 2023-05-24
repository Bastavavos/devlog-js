// you can write js here
console.log('exo-2')

const myDate = new Date()
console.log(myDate.getDay())

let semaine = "c'est la semaine"
let weekend = "c'est le week-end"
let heure = myDate.getHours()
console.log(heure)
const isTesting = true;

function test() {
    if (isTesting) {
     const hour = prompt("heure :");
     const day = prompt("jour :");
     const month = prompt("mois : ") + 1;
     const year = prompt("année :");
     const myDate = new Date(year, month, day, hour);
     console.log(new Date)
    } else {
     console.log(myDate.getDay())
    }
}

test();

function isWeek(myDateParameter) {
    return myDateParameter.getDay() > 0 && myDateParameter.getDay() < 6 
}

function hourfridayweekend(date) {
    return date.getDay() == 5 && heure > 16
}

if(isWeek(myDate) && (hourfridayweekend(myDate) == false) && (hourmondayweek(myDate) == false)){
    console.log(semaine)
}else{
    console.log(weekend)
}

function hourmondayweek(date) {
    return date.getDay() == 1 && heure < 9
}

