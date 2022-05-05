let raceNumber = Math.floor(Math.random() * 1000);

var earlyReg = false;

var age = 14;

if (age > 18 && earlyReg){
    raceNumber += 1000;
}

if (age > 18 && earlyReg){
    console.log (`Your race time will start at 9:30, your race number is ${raceNumber}`);
}else if (age > 18 && !earlyReg){
    console.log (`Your race time will start at 11:00am, and your race number is ${raceNumber}`);
}else if (age < 18){
    console.log (`Your race time will start at 12:30pm, your race number is ${raceNumber}`);
}
