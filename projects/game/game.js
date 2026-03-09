let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let altitude = 5000;
let atc = false;
let towerBool = false;

//If you need, add any "helper" functions here
// This function prints text out to the terminal
function print(text) {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.innerHTML = "<p>" + text + "</p>";
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}


//clears the output screen.
//this isn't really necessary, but I found that the output
//looked cluttered if I didn't clear it every time the user
//enters a new command
function clear() {
    document.getElementById('output').innerHTML = '';
}

// This lets the user type input. It acts a little weird.
// Don't worry too much yet about how it works. Just know
// that when you press the enter key, it grabs what you typed
// and passes it to a function called `handleInput`
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && gameActive) {
        const input = this.value.trim();
        this.value = '';
        print('> ' + input);
        handleInput(input);
    }
}

//This function will be overridden by the current game state
function handleInput(input) {
    console.log("No handler for input: " + input);
}

//This is the function you should call in your game code. Its
//input is a function that takes a string and decides what to do with it
function waitForInput(handlerFunction){
    handleInput = handlerFunction;
}

function waitThenCall(target){
    setTimeout(target,2000);
}

function stayHere(){
    print("\nsorry, I don't understand your input. I'll assume you " +
        "want to stay here");
}

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
	}
	else if (input.toLowerCase() === "land in field"){
		field();
	}
	
	 else {
            waitThenCall(begin);
        }
    }
    waitForInput(processInput);


function field(){
	print("You landed safely, but crashed into a rock and scraped your plane up. Nothing bad happens, but your plane is totaled.");
	gameActive = false;
}

function atc1(){
	print('"Mayday Mayday!" you yell through your radio, prompting radio silence. You relay the situation to the controller, losing precious time. "It will we a low approach," the controller tells you, "but go for airport A. Get in contact with the tower as soon as possible."');
	altitude = altitude - 500; 
	begin();
    }
function tower(){
print('You relay everything to the tower. "Clear for runway 24," she tells you. You check the weather. It will be a crosswind landing, but you can make it.');
	towerBool = true;
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
		if (towerBool === true){
			land();
        }
	    else{
			print("You got lucky, however that move was very illegal. Always talk to the tower. Your instructor got fired for signing you off.");
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
