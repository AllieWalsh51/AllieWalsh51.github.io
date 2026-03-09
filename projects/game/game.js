let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let altitude = 5000;
let atc = false;
let towerBool = false;

//Make one function for each location
function begin() {
    clear();
    print("\nYou are a student pilot on your first cross-country solo when your engine fails. Airport A seems too far to make, but airport B requires maneuvers that will slow you down too much, and talking to ATC would take time. You have to do something!");
    print("\nWhat do you want to do?:" +
        "\nLand at airport A \nLand at Airport B \nLand at field\nTalk to ATC");
   
    
    function processInput(input){
        if (input.toLowerCase() === "land at airport a") {
            	altitude = altitude - 3000;
		airportA();
        }
	else if (input.toLowerCase() === "land at airport b"){
		airportB();
		altitude = altitude - 4000;
	}
	else if (input.toLowerCase() === "talk to atc"){
		atc1();
	}
	else if (input.toLowerCase() === "land in field"){
		field();
	}
	
	 else {
            waitThenCall(begin);
        }    
    }
    waitForInput(processInput);

}

function field(){
	print("You landed safely, but crashed into a rock and scraped your plane up. Nothing bad happens, but your plane is totaled.");
	gameActive = false;
}

function atc1(){
	print('"Mayday Mayday!" you yell through your radio, prompting radio silence. You relay the situation to the controller, losing precious time. "It will we a low approach," the controller tells you, "but go for airport A. Get in contact with the tower as soon as possible."');
	altitude = altitude - 500; 
	console.log("in atc1");
	waitThenCall(begin);
    }
function tower(){
print('You relay everything to the tower. "Clear for runway 24," she tells you. You check the weather. It will be a crosswind landing, but you can make it.');
	towerBool = true;
	altitude = altitude - 500;
	waitThenCall(airportA);
}

function airportA() {
    clear();
    print("\nYou are approaching airport A");
    print("\nWhere do you land?" +
        "\nRunway 14 \nRunway 32 \nRunway 6\nRunway 24\nTalk to tower");
    
    function processInput(input){
        if (input.toLowerCase() === "runway 14") {
            isDead1();
        }
	    else if (input.toLowerCase() === "runway 32") {
            isDead1();
        }

        else if (input.toLowerCase() === "runway 6") {
            isDead1();
        }
	else if (input.toLowerCase() === "runway 24"){
		if (towerBool === true){
			land();
        }
	    else{
			print("You got lucky, however that move was very illegal. Always talk to the tower and get cleared for landing. You were fine, but your instructor got fired for signing you off.");
			gameActive = false;
        }
	}
	else if (input.toLowerCase() === "talk to tower"){
		tower();
	}
	    else {
            stayHere();
            waitThenCall(airportA);
        }
    }
    waitForInput(processInput);
}

function land(){
print("Good job, you've landed safely. You have completed the game.");
gameActive = false;
}
function isDead1(){
	isDead = true;
	print("You crashed. Don't do that next time.");
	gameActive = false;
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            begin();
    }
    waitForInput(processInput);
}
