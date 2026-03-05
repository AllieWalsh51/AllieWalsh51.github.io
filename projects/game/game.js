let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let altitude = 5000;
let tower = false;

//If you need, add any "helper" functions here


//Make one function for each location
function begin() {
    clear();
    print("\nYou are descending the the middle of nowhere. Airport A seems too far to make, but airport B requires maneuvers that will slow you down too much, and talking to ATC would take time. You have to do something!");
    print("\nWhat do you want to do?:" +
        "\nLand at airport A \nLand at Airport B \nLand at field\nTalk to ATC");
   }
    
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
	else if (input.toLowerCase() === "land in field"){
		field();
	}
	}
	 else {
            waitThenCall(begin);
        }
    }
    waitForInput(processInput);
}
function atc1(){
	print('"Mayday Mayday!" you yell through your radio, prompting radio silence. You relay the situation to the controller, losing precious time. "It will we a low approach," the controller tells you, "but go for airport A. Get in contact with the tower as soon as possible.");
	altitude = altitude - 500; 
	begin();
    }
function tower(){
print('You relay everything to the tower. "Clear for runway 24," she tells you. You check the weather. It will be a crosswind landing, but you can make it.')
	tower = true;
	altitude = altitude - 500;
}

function airportA() {
    clear();
    print("\nYou are approaching airport A");
    print("\nWhere do you land?" +
        "\nRunway 14 \nRunway 32 \n Runway 6\n Runway 24\nTalk to tower");
    
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
		if (tower = true){
			land();
			{
	else{
			print("You got lucky, however that move was very illegal. Always talk to the tower. Your instructor got fired for signing you off.");
			gameActive = false;
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

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}
