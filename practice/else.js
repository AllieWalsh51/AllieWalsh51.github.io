"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
let yourName = prompt("What is your name?");
addToBody("Hi, " + yourName);
*/

let temperature = prompt("What is the temperature outside today?");
temperature = Number(temperature);
console.log(temperature);
if(temperature <= 32){
addToBody("It's freezing! Stay inside!");
}
else if(temperature >=80){
addToBody("Go to the beach!");
}
else{
addToBody("Go on a walk, I've seen your screen time :0");
}

addToBody("Have a nice day!");
