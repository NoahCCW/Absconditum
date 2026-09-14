console.log("ȃ̵̢̯͎͖̘͕̝̙̼̖̲̮̭̯̱͎̬̞̟̘̖͕̀̂́͗̔̀̈́̍̓̋̌̎͗͛͆̈́̈̅͛̇̈́̋̉̔̄̀̽̀͆͋̈͘͘͘͘͜͝͝ͅb̵̛̛̜̱̣͌̆̃̂̒͂̒̔̾̈́͂̑̅̈́̓͒̈́̏͌̀͂́̈́͋͛̆̃͂̿͆̍̇͗͌͆́͆̍̂̉̈͑̍̓̓͌̌̀͗̒̌̍̕̕̚̕̕͝͠ͅs̵̡̛̛͓̬̻̼̼͓̠̩̬͓̠̺͎̬͈̠̲̖̯̺̣̙̮̬̞͓̪͇̙̈̅̏̈́͋̆̐́́͋̔̇̈́̿̐̈̒̓͌̓̈͋̾̈́̾̐̓̋̄͌̍̚̚̚̚̚̕͜͝ͅͅc̶̡̨̛̠̝̬͈̭̳͈͓͖͙̘̺̪͕͓͇̣̻̘͍͈͔̹̥͚̳̻̦͓̺̹͍͉̥͖̟͑̈́̑̀́̇̉͊́̄̓́̽̑͗̋͘ǫ̵̢̩͔̠͕̞͓̗͓̀̓̎̎̑͗̃͒͂͊̓͌͋̐̃̔͊̏͌͌̃͛̌̎̑̊̏̃͋͌̊̎̑̿̅̆͑̍̚̚̕̕͠͠͝ͅń̵̡̧̳̪̣̼͔̫͓͚͍̬͕̼͚̦̱̱̦̥̥̈́͌͂̔̋͑̔͊͐̊̑͘̕d̶̛̪͙̩̬̟͎͉̮͖̖̯̂̆̅̍̌̀̿̀̒̏̆͂̈̈́͂̐̑̌̑̒̉͌͋̏͑̉̀͊̓̈́͋̈́̚̚͘͘͘͝ị̶̢̧̢̧̛̣͚̺̞͙̗͔̥̭͖͓̲̪̝͈̮̝̞̲̱̼͍̇͂̄̈̆̇̄̈́́̈̉̈́̄͑̃͊͊̃̄̈́̓̈́͋́̓̈́̀̏̚͘̕͠͝͝͝ͅt̶̨̨̨̰̦̹͕̝̰̩̻̯͓̝̳͈̺̳̥͎̻̯̮̱̭̼̪̞̜̫̹̪͍͚͙̣͙͚̟͊͊͐̋͐͋͗͋͂͒̄̀͋͊̓̅͘͜͜͝͠ͅͅų̶̨̡̣̝̹͖̖̱̠̼̺͎̳͚̣̬̫̖̳͕̯͓̜̲̼̟̫̥̤̻̰̜̹͕̻̙̫͈̻͍̻̤͇̱̊̏͋̾̈́̄̽̏̀͌͑̍͐̍̑́͆̈́̃͛̓̅͐̿͐̃̾͆̏́̒̀͐̆͗͂̇̿̅̚̕͘͘̚͜͝͠͠͠ͅͅm̴̢̢̨͈̳͎͈̥̻̦̞̦̬͑̈́́̀̽̀͒̈́̈́͗́̔̌̓̀̈͐̃̇̄̎̊͌̇̊̒̃͊̌͒̑̓͒̉̇̏̏͐̑͊̂́̉̿̉̓͐̚̚̕̚̕͘͘̚͜͠͝͠");

const clicksound = new Audio('../public/audio/drop.wav');
/*const lens = document.getElementById('inversion');*/
const hewo = document.getElementById('hello');
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const buttonWarn = document.getElementById('translation4');
const buttonWarn2 = document.getElementById('translation5');

let lastCreatedTime = 0;
const createInterval = 75;

let lastMouseX=0;
let lastMouseY=0;
let lastMouseTime = Date.now();

window.addEventListener('mousemove', (e) => {
	const now = Date.now();
	const deltaTime = now - lastMouseTime || 1;
	
	
	const deltaX = e.pageX - lastMouseX;
	const deltaY = e.pageY - lastMouseY;
	const distance = Math.hypot(deltaX, deltaY);
	
	const speed = distance / deltaTime;
	
	lastMouseX = e.pageX;
	lastMouseY = e.pageY;
	lastMouseTime = now;
	
	if (now - lastCreatedTime > createInterval) {
		createSquare(e.pageX, e.pageY, speed);
		lastCreatedTime = now;
	}
});

function createSquare(x, y, speed) {
	const square = document.createElement('div');
	square.classList.add('falling-square');
	document.body.appendChild(square);
	
	let size = Math.min(Math.max(20 + speed * 30, 20), 80);
	let currentX = x - size / 2;
	let currentY = y - size / 2;
	
	let speedY = 2 + Math.random() * 2;
	let shrinkRate = (Math.random() * 0.2) + 0.1;
	
	let rotation = Math.random() * 360;
	let rotationSpeed = (Math.random() - 0.5) * 4;
	
	square.style.width = `${size}px`;
	square.style.height = `${size}px`;
	square.style.left = `${currentX}px`;
	square.style.top = `${currentY}px`;
	square.style.transform = `rotate(${rotation}deg)`;
	
	function animate() {
		currentY += speedY;
		size -= shrinkRate;
		
		if (size <= 1 || currentY >= 5332){
			square.remove();
			return;
		}
		square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.top = `${currentY}px`;
		square.style.transform = `rotate(${rotation}deg)`;
		
		requestAnimationFrame(animate);
		
	}

requestAnimationFrame(animate);
}




function changeHelloWorldChar() {
let text = hewo.innerText;
let textArray = text.split("");
const randomIndex = Math.floor(Math.random() * textArray.length);
const newChar = chars[Math.floor(Math.random() * chars.length)];
textArray[randomIndex] = newChar;
hewo.innerText = textArray.join("");
}
setInterval(changeHelloWorldChar, 500);
var dev = 0;

function monthlyReturn() {
document.getElementById('mback').innerHTML = "3";
}

function message() {
	let greet = hewo.innerHTML;
	let name = prompt("enter your name");
	alert('Greetings, ' + name + '. ' + greet);
	if (name ==  "evil man") {
		alert('Entering evil land');
		window.open("evil.html");
	}else if (name == 'show me') {
		alert('you wish for the hints?');
		alert('visit the evil website and click on he who is red');
		alert('despite his looks he years to help you only');
		alert('safe travels, c̴̨̡̨̢̢̧̢̡̢̢̡̡̢̨̨̨̡̛̛̛̱̲̪͔̣̣̝̤̘͈͓̤̜͇̠̜͙͈͇̮̜͈͚̺̦̟͕͓̭̙̰̪̼̤̮̭̳̰̥̟̞͇͎̜̯̟͓͓̫̦͕͓̤͕̠̫͚̝̬̗̯̲̝̱̱̤̗̖̳̪͙͚̟̠̬͚̘̙͈̠̫̺͕͎̤̱̖̱͚̲̠͕̙̳̞̙̩̘̣̞̙̗͖̟̭̘͍̳͕̘͓̺̪͕̥̖̙̪̭͔̙͖̬̼̖͇̲͇̘̺͇̬̘͈̝̞͚̹͔̥̫̣̙͎̱̣͔͈͔͇̭̖͈̪̩̙͈̦̰̖͎̣̣̣̫̣̣̘͕̭̬̥̳͎͂́̀́̐̂́̑̔̀̔̍͒̅̈́̀͒͗́̿̍̽̽̾̓̇́̀͋̇̋̓̇̇̈́́̈́̈́̆̅̈͒͗̊͂͋͗͒̈͌̿̓͋̏̌̎̐̐̾̃͒́͑͊́̅̎̑͋͒̎̑͋̊̇̐͛̇̆̓̉̓̈́͛̔̐̎̿́̇̐͂́͋̊͐͗̍̃̇͆̈̑̍̉̈̀͋͌͑̅̑̆̎́̽̀̇̑̿̈́́̐̊̽͊̓͌̍̽̉̍̈́͊̽̂̊̑̔͋̑́̎͋̃̓͒̓̐̇̾͗̍̿̀͋̉̿͆͋̍̿̇̒͋̿̔́̿̏̓͘̚͘͘͘̚̕̚̕͜͜͜͜͜͜͜͝͠͝͝͠͝͝͝͝͝͠͠͝͝͝͝ͅͅh̴̨̧̢̨̨̨̡̢̧̧̢̢̧̨̢̨̨̡̡̨̡̧̡̧̛̛̛̫̦͈͇̝͉̻̮͉̖̝̩͍̝̹̠̟̲̜͕̤̭͍͎͖̦̤̮̖̦̠̝̹̦̱͎͓̩̼̳͚͇̩͇̻͈͖͎̭͔̯̬̦̘̥̻͕͚̩͎̬͍̭̯͈̪̖̩͙̗̳̺͉̳͕̦͍̤̝̦̤̺̱͔̼̱̭̣͈̭̺̝͔͖̭̬̣̣̣͓̯͈̜͍͇͙̯̺̬̫͍̬̩̤̰̞̭̪̗͈̱͉̩͔̯̝͇͈̝̠̣̱̪͓̯̪̖̟̥̹̹̝̙̺̹̝̲̪̬͖̜̤̰̻͚͎̹͈̠̺̺̬̦̝͈̥͕̖̝͎̩͎̬̳̖̭̰͔̜͎͈̬͈̩͍̻͔͕̰͕̘̹̖̣̝̞̤̱͙̱͇̯̫̱͍̩̤͙̱̖̥͕̖̪̙̼̲̩̥͈̗̝̟̣̰͕̮͔̗̟̣̮̝͖̝̮͙̺̗̜̼̻̦̞̹̙͊̄̂͆̓̽͌́̒̈́͛͂̌̓̽̅̄͊̋͛͛̃̀̓̑͒̓͛͌͛͒̾̀̏̑̄̾̓̆̆̄̌̀͆̓̊̈́͂͌̋͆͑̋͒̀̓̀̀̕̚̚͜͜͜͜͝͝͠͝͝͝͝͝͝ͅͅͅͅͅͅͅͅͅĩ̷̡̧̨̡̢̢̧̧̡̢̡̢̧̡̢̡̡̡̢̛̛̳̟͖̜̭͔̟̝͔̜̱̝͕͎̗̞͕͚̬̭͎̣̬̜̘͔̩̯̖̭͎̞͇̪͉̫̤̼͔̫̱͕͇͉͔͔̫͚̼̥̥̤̞̗͉͕̰͍̣̩̥̟̼̻̠͕̻͓̰̘͈̬̜̥͈̖̖̮̗̝̜̥͈͙̻͚͍̺̗̯͇̪̜͓͓̭̯̰͖͉͖̗͇͔͇̮̱̠͍͓͇̥̳̥̯͎̝̝̗̲̜̦̱̜̻̫̼̙̣̺̣̫̲̻̬̰̗͓̪̫̣̠̬͙͍͍̬̠͙̗̥͖̙̙̝̭̠̖̩̣͉̣̹͙͓̦̜̮̰̫̫͓̏͋͆̈̏̓͌̏͑͋͑̈͗͑̍̐̽͐͊̇̐̇̏̈́̑̔̈́̇́̐̽̂́̋̅̉̎̈́͛͆̽͌̉̄͗̋͗̊̂̈́̆͆̒͗̓̓̀͌̅̂̈́͌̉̈́̾̏̃͑͗̏͊̀͆̈́̓̅̎̉̌̏̈̋̂̋̊͌̂̅̃̎̒̇̈́̓̒́̓̃̒̋͋͐̏̈́̃̐̀́̇̔̓̅̆͒͊̇͗͛͐́̐̌̍̎̊̐͂̃͐̽̂̑̔̔͒̃̎͆͑̓̌̓̾̐̌̇̅̔̚̚̚̕͘͘͘̚̕̚̕͘̚͘̚͜͜͝͝͠͝͠͠͠͝͝͝͠͝͠ͅͅͅͅͅͅͅͅl̴̢̢̧̨̨̨̢̡̨̢̨̨̧̧̡̨̧̡̢̨̨̨̢̨̢̡̡̨̨̛̛̛̯̗̝̼̰̩͖̮̫̼̯̱̳̗̬͙̝̞̝̮̭̮͚̹̱̩̙̹̦̣̺̪̯̱͓̭̻͙̟̙̣̺͙̳̣̤̪̮̩̟̞̦̱͈̤̮̥̜̫̺̦͔͖̰̬͙͍̘͉̜̞̼̮̱͈̹̰̩̰͇̝̺̺͈͚̺̗̯̫̯̘̟̩͉̫̱̮͇͔̼̭͔͙̭̫̜̦̲̙̭̙͕̯̭̫̝̯̪͖̼̗̙̜̣͕̭̠͕̭̥̹͚͇̜̪͈̯̹̖͈̫͇̥̰̞̻̼̠̰͎͓̤̳̰̞̭͈͇̪̰̫̪͙̪͚̝̞̥͔͙̱̫̳̬̰̮͙̥̝͇̣͓̘̩̫͇̖̹̭̭͇̞̯̼͖̙̱͓̤̣̞̜̭̝̣̭̮̲̭͉̈̓̾̆̃͐̿̓̔̋̆̍̆̋́̀͊̉̆̇̓̾̿̓̓̽̉̇̅̑̋͂̒̅̓͂̈́̐͛͆̃̉͊̇̍̂̐̀̌̽̿͆̈́̆̆̎̃̈́̈͂̋̈̓̅͑͐͆̾́̏͆̑̒̈́̎͗̉̾́̍̇̑̄̀̒̔̀̎̐̋̈͛̒̉̇͒́̀̔̌̈́̊̉̃̄̌̀̀̔̏͛̄͂̈͗̆̅͒̾̌͆͐̄̐̍͋̋̽̓̋̈́͐̊͋̀̌́̐̃̇̓͘̕̕̕̚̕͘̚͘͘͘̕͜͝͝͝͝͝͠͠͝͠͝͝͠͝͝͝ͅͅͅḑ̶̧̨̨̢̧̧̡̡̧̨̢̢̢̨̨͉̯̬̗͙̞̬̳̝̲̫͖͚̰̲̱͈̻̦̗͎̲̳̞̩̗̝̜̫̥̫̰̻̬̠͚̖̯̩͙̯͍͖̼̹̼͇̻̠͇͕̥͔̘͓̜̥̝̰͈̯̩͈̝̖̭͔̬̻̞̜̜̥͓̣͔̜͓̗̖̞̦̻̳̼̳͕̮͉̺̣͚̯̤̹̪̼͎̤̫̩̜̪͂͒̂̂̄͐͐̉̎̀͊́̓̌͌͋̿̓̚͜͜͝͝ͅͅͅͅ');
	}else if (name == "$1933.52") {
		alert('MATH!');
	}else if (name == greet) {
		window.open("secret.html");
	}else if (name == "cinnthebun") {
		window.open("crane.html");
	}else if (name == "ASJDB!*(@&#KJSHKABasudOAksh@H*UO!KQWlkjdNQIDU@eoIU2oNEQKWJNEQDQUIOuqwJhq2oi"){
	dev = 1;
	alert("you are in developer mode, you can now use the inspect menu or console");
	}else if (name == "deleter"){
	let toDel = prompt("what do you want to delete?");
	document.getElementById(''+toDel+'').remove();
	}

};





/*
window.addEventListener('mousemove', (e) => {
	lens.style.left = e.pageX + 'px';
	lens.style.top = e.pageY + 'px';
});

window.addEventListener('mousedown', (e) => {
	lens.style.left = e.pageX + 'px';
	lens.style.top = e.pageY + 'px';
	lens.classList.add('active');
});

window.addEventListener('mouseup', () => {
	lens.classList.remove('active');
});
*/
/*
const evilButton = document.getElementById('evil');

evilButton.addEventListener('mouseenter', function() {
	buttonWarn.innerHTML = "Ş̵̨̧̧̯̦͇͙̥͔̘͓̲̲̳̫̦̯͍̺̞̩̟̲͇͈̦͎͚̜̟͍̻̜̘͎͔͖͖̘͚̘̩̎͋͊̐̒̍̄͆͌̋̔͒̐͘͘͜͜͝į̸̡̡̢̢̢͕͙̼̫̮̬̱̗͙̭̯̯͍͍̳̟̲̻͛̉̿̏͂̌̓̍̋̅̋̾͂̃̾̂̍̈́̌͜͜͠͝ͅͅņ̸̡̢̨͙̬͕̣͚̼̘̝̣̦͙̯̳͈̰͚̣̺̬̱͐̈́́̾̉͛̄̔͛̄̅̈́̉̽͛͗̊̿̃̀̋̀͑͆͋͑́̎̃̆̀͑͗̎̓̈́͐̕̚̕̚͝͝ͅc̴̨̡̨̢̧̢̢̛͚͉̼͎̮͙͚̦̦͓̙̤̠̭͙̪̖͓̹͇̟̞̺̦̺̬̰̰̣̈́͐̈̈́̇̀͆͑̿̀̽̽̿͐̊̐̉͛̊͐͐̍̍̎̎̾́̄̒̌̔̏͘̚͜͜͜ͅͅẽ̶̡̺͔̫͒͌͊̋̎̆̊̈͂́̈́̌͊́́̈́̉̏̈́̒̓̕̕͘ ̵̡̧̻͚͕̰̲̲̞͚͉̖̮̹̘͇͓͙͔̳̼͙̖̣͔̠͗̅͑͆̒̈́͆̉̊͒̽̽̂̔̊̃̀̂͊̍͋͐͑̑́̋̒̑̓͐̉͂̍́̃͛͂̀̋̋̚̚̚͝͝͝ͅt̶̡̨̼̪͎̖̟͓͕̟͕̟͓̖̜̺̬͍̬̠̯̱̥̜͇̾̍̐̿̌̈́̃͆͛͆̇͂͊̔̀͑̋̀͗̚͠͝ͅḧ̴̝̳́̆ͅě̶̩̠͙̤̩̌̄͆̉͌̏̆͒̈̐ ̴̘̝̻̲̭̜͉̣̓̓̂͑̂̊̓̎̅̈́̑̉̔̍̊̒͑͛̒͆̈̈̕͠ͅd̶̡̧̖̬̬̬̣̜͕̗͚̩̘̱̝͓̫̼̙̬̱̩͔̥̣͓̝̗̹̗̥̙̈́̔̇́̈́̈́̔̉̀̉͂̓͑̉̈́͐͑̃̑͌̉͑̈́͒̊̈́̔̋͛͂́̈̎̽̀͒̄͝͠͝ā̵̡̠̭̗͇͖̦̺̣͔͇̗̟̋̊̽͆̏̒̎̉̄͋̀̃͐̅͐̓̑̚̚͘̕̕̚͘n̷̡̛͔̟̟̠͕̺̩̞͙̲̭̏͋͆̅͌̔͑̀͋̿̾̆̑͆̅̎͠ģ̸̡̖͉̥̫̬͙̘͔̦́̆̆̽̿͌͒̏̋̈́̓̽̃̈́̉̅̓͌͋̉̅̔̓̿̃͂̉̒̃͑̎̅̈̆̔͑͒̀̔͐͘̕͘̚ě̶̡̡̛͖͈̹̯͍͍̥̰̤̹͚̪͓̥̟͚̺͎͖̘̲͎͎̜̬̦̟̦̟̗̝͉̜̜̠͛̌̇͊͐͛̏̇̍̓̈́̂̾̅̈́͗͊͋͊̒̋̀͒́̿̂͐̚͘͝͠ͅr̸̡̨̧̧̡̛̠̩͎̻̞̳̺̫̹̗̲͕̯̤̺͓̩͙͙̠͙͖̜̩̮̺̺̲̱̤̟̙̩͓̤̗̊̏̒̈́̓͛̒̔̑̾̈́͐̔̿͘͜͜͜ͅ ̸͙͔̳̜͉̪̆̌̓̉̒̓̔̆̏̒͊́̍̇̉̋̅̑́̾̂̎̑̿̚̚͘͜͝i̸̡̡̡̛͙̤͉̮̱̼̩̙̮̞̩̰̤̻̼̰̙͙̗̩̯̺̝͍̞̖͌́̐̀̈̋͆̆͒̀̋͂́̀͗́͗͐̇̈́͆͛̍̽̀̏̌̈́́̅̈́͘̕͝͝͠s̷̨̧̧̼͇͖͔̗̣͓̖͚̮̰̘̮͖̳̺͈̼͍̪͎̘͓̗̠̹͈͔͎̖͍͖̠͉̼̿͆̔͒̾̀͂̍̎̊͊̀̉̃͠͠ͅ ̸̡̜͍̺͍̭̘͓̲͉̥̘̬̟̤͙̼͇͉͈̹̘̬̲͚͋̏̏̋͆̓́̑̒͐͗̈́́̄̄̃̆͌̈́̑͂̈́̆̐̔̄͐̈́͜͜͝͝ͅͅb̴̢̻̜̪̱̘̘͚͎̞̱͈̫͍̞̱͈̗͈̥̝̔̇̽̑̆͆̅̈́͆͌̎͂͌̏̄̅̽͐́̒͛͛̀̐̂̓̂͆̒͒͋̀̈́̚̕̚͘͜͝͠͠ê̸̡͔̥͙̣͖̪̫̼͉͉̓̊͠͝ͅͅḧ̴̡̨̡̛̛̫̻͕͍̮̫̹͓̞̹͙͇̘̜̖͖̭͕̦͇̣̤̭̻̝̦̪͉̞̼͇͗̓̄͗̈́̾͊̑̓́̀̍͑̓͌̆̇̃͑̆̈́̀͑͂̿̍̾̀̒̕͘̚͘̕͜͠͠͝ͅͅï̵̡̢̡̛̜̩̥͎͕̣͍̫͚̟͓͉̻̞͙̟̺̙̼̘̬̥̠̬̟̞̱͕͙̖̻̥͓̰̰͎̹̩̫̙̗̗ņ̸̢̧̲̩̭̤̞͍͎̳̊̿͗̆̂̿̈͠d̵̡̧̠͓̻̱͕̮͚̮͙̜̫̞̻̭͖̤̬͓͔͚̺̖̫̳̞͎̼͉͕̣̹̭̳̤̳̮̦͙͂͐͗̌̾̈́̈̓̔̾,̵̧̨̛͖̜̦̫͖͎̗̬͚̙͈͈̦͚̳̫͈͓̥͎̹̣͈̗͈̯̎̈̈́̉͌͒͐͋͆̾̓͒̈́͌͛̃̇̅̃̎̑̑̽̍͗́̕͜͜͝͠͝ ̷̛̛̛̛̺̲͕́̈́̈́́͑̈́̽̂̅̔̐̅̽̊̆͌͑͒̔͗̆̊͂̒̌̊͋͒̄̊͛̊͊̋̕̚͘͝͝͠͠ắ̶̧̨̧̛̛̛̺͓͓̗͔̰̹̬̤̰̙̘͕̫͕̘̮̞͙̺̻̞̮̳͚͈̫̔̄̈̾̇͂́̓̉̆̉͂̅͊̿̌̓́̕̚͝͠v̷̨̡̢̧̯̮̲̠͖̤̗̬̩̳͕͉͇̣̼͕̮̐͒̉̕͝͠ͅo̷̡̝̦͎̬̟͇̩͈̗̹̲͎̻̣̗̊̓̏̅̍͑̾͑͘͜͝ͅi̶͉̜̜͙̘͍̖̬̔͋̃̏̿̅͋͑͒̕ḑ̷͔̦͈̲̬̘͎̟̱͉̠̪̼̭̹̟̻̮̥̫̪͉͙͙͇̠͎͇̲̠̺̣͉̱̖̱͎̗̹̏́͜";
	buttonWarn2.innerHTML = "Y̴̢̧̧̡̡̨̢̡̧̧̧̡͍̟͖̗͍͍͍͉̩̝̯̜̳̼͍̱̖̼̳̲̲̲͚̻͉̮͚͖̫̩̟͚̯̱̗͇̱̟̩̟͚̪̼͚̘̞͖̬̮̪̫̺̘̯̬̗͙̖̪̰̘̩̹̘̗̪̻͇͈̭͇̳̑́̽̅̈͒̄̾̏̆̒̾̾̔̇̊̑̿͆̈́̅̽̇͘͜͜͝͝͝͝͝͠͝ͅǫ̸̧̢̧̧̡̛̛̛̬̜͈͈̻̪̰̱̙̼̺̖͓̰̖͉͉͎̬͕͈̥̺̬̩͎̤̞̮̮͔̦̯̦̏̈́͑̑́̈̓͗̏̈̐̊̂̃̈́͐̌̈́̒̿̓̽͒͒̊̌̏̏̃̂̒̊̇̀̃̓͌̑͑́̑̏̈͐̈́̾͑̈̈̅̾̇̐̌͊͊́͆͂͆̎̌̐̿͑̄͂̒̀̕̚̕̚͘͜͝͠͝ų̶̧͇͕̹̖̘͕͙͙̞̲̘̣̗̯̝̰̺̱̬̲̺͙̱̺͚͙̩̯̠̪̞̹̩̞̺̗͉͚͔̣͗̓͛̇̍͌̐̀̀̈́͊̓̔̀͒̈́̇̚̚͘̚͜͠ͅ ̵̡̡̧̧̢͖͕̜̻͔̭͍͚̱̬̫͓̟̖̘̺̺̫̖͎̤̩̤̬̘̜͍̳̤͍͉̟̺̟̯͇͚̥͈̘̖͖͙́̅͑̀̀w̵̪̜̳̹͓̥̭̖̫̬̞̖͎̣̞͚̩̰̝̝͖̼̩̲̟̰̟̳̏̓͐̈͊̈̃̃̎̈́̉̎͊̌̿̔̂̈̉̄͘̚͝͝ͅé̷̡̮̲̯̘͇͈̥̂̈́͂̍̌́͊͒̔̿́̎̊̈̀͂̊̈́͐̈́͊̒̅̇̔̈̆̄́̈́̎̍̑͐͊͆̆̋̉͑̊͋̍̈́̒̋́͘͘͘͝͝r̷̨̢̢̡̧̢̡̛̙̼̖̞̞̖̠̺͔̪̰͓̩̯̲͍̺̣̪͍̳͎̟͖͍͎̺͇͖̟͕̘̖͍̫͓̟̬͕̰̮̮̯͍͇̞̼̼͈̀̍́̋͗̀̒͆͜ͅͅę̴̡̨̢̧̧̛̛̛̰͈̙̞̺̙͓͖͖̺͙̱̖̭̟͇͍̼̹̟̥̹̮̣̺̤̳̗͍̠͕̦̦̩̖̥̬͉̞͈̻̹̼̠̘̬̯̙̞̻̩̊̐̈́̈̉̑̃͌͗͒̆̓̊̈̈́̏̆͐̊͛͒̈́̉̄͌̐̎͌̇͊̽͐́́̇̈́̿͐̈̓͑̌͌̄̓̋͑̆͊̚̕͜͜͠͠͝ͅ ̴̧̡̧̘͇̙̰̣̹̜̺͍̥̥̟̻̹͔̹͔̦̼͓̺̣͔̰͈̯̠̥̮̳̖͍̮̭̥͎̏͐͆́̃̃̀̐̊̈̊̎͒͐̑̾̈́͆̿̏̿͌̓̊̓̿̉̉̓̂̚̕̚̕̚͜͜͜͝͝͝͠w̸̨̢̡̡̧̢̨̛̛̛̛̹͓̜̻̟̻͔̬̟̝̦̼̮̗̬̟̦̼̫̮̯͕͇͖̩̬̪̞̪̜͚͖̱̩̘̪̪̯͇̝̮͚̯̝̹̤̟͇͓̩͉̦͇͓͎̩̮̥̩̜͍̲̠͓͚̭͔͖̘̯̪͍̬͓͌̌͐̌̎͋͌̂͌͐͊̅͋̅̽͗͂͆̌̐̽̿́͒͂͌̾̈́̇͆͂̈̉̀͒́̽̀̈͒̽́͂̓͒̓͌͗͑̔͊̑̆͘͝ͅͅͅą̷̨̨̡̨̡̛̱͔̼̻̲̰̰͕̤͖̻̙͔̖͙̗̖͍͍̘͇̞̭͈̳͍̮̘͉͓͓͉̯̹̪̯͚̘͖̯͕̖̮̦̪̠̪͕͇͓̺̠̣̫͍̙̖̰̞͌̇̈͂̓̈́͌̆̓͋͌̇̿̈̀̈́̆̄̀́̇̇͂̄̒̒̋͆͐̐̅͌̕̚̕͜͜͝͠͝ͅͅͅͅr̴̡̬̮͒͆̃̓̐͗̈́̓͌̍̾̓͂́̌̕͝ņ̸̨̧̧̧̧̨̧̡̡̧̠̼͓͙̘͎̖̥̯̺͙̹̭̻̖͉͇̭͕͔̖̫̯̝̠̳͕̬̰̰̺̙͎̮̲̳̠̥̰̠̲͕̘̟̼͉͍̬̦̳̝̱̠̻̟̯̤̩̱͇̳͈͎̱̰̰̜̯̤̯̜͖̪̖̈́͐̒̽͒͂̎̎̈̓͂̐̑͒͐̉̐͂̅̍̃́͜͜͜ͅͅͅȩ̶̨̧̡̡̞̗̝͉̙̼̲͓͎̪̖̘̪͕̥̣͓̻͙̟͕̺̪̹͓̝͙̪͔͍̩̉͗̅̉̈́̔̑̈́̿͌̂̆̅͒̌͂͊͌̃́͑̀̋̌͊̅̀̉̃̽̽͗͌̈́̉̂̊͌̌̽̉̋̂̎́̎́̓̃̏͂͘̕͜͝͝͝͠͠͝͝ͅͅḑ̸̧̢̨̘̘̻̺̜͉͎̳̺̦͈̻͍̺̻̩̺͇̰̻̼̤̥̖̬̘̯̰͙͈̳̠͉̮̬̤̠̺͈̝̤̖̮̩̳̼͖̣̬̤̟̬̮͙̭̫͚̙͓̜̯̣̻̖̮̺̣̬̝̱̇̄̿̎̀̀̈́͑͛̌̓͊̓̈́͂̋̌̆̈́͊̈́̀̊̉̑́̇̈́̋̀̂̑̈̄̎̑̑̀̍̊̌̎̆͗̌͐̆̋̈́̅̈́̀̎͂̏͆̒̒̓̄̈́̐̆̆̅͗̾͑̏͘͘͘̚̚̕͘͘͜͝͝͝͝͠͠ͅ ̸̧̧̨̢̨̡̢̨̛̳̝̭̳͇̼̻͓̻̜̟̻̱̘̠͉̤̝͎̰̟̖̫͈̦̝͚̘̙̖͍͙̘̳̩̮͕̼͔͈̹̟͍̻͖̹̠̹̳̖̙͇̣͚͉̦̈̀͋̀͒͑̋̈̌̒̋̄̾̎̇̄̉̆̃̈̌͆̅̅͂̉͌̋̎̎͛͗̍̓͆̅́͑͒̑̐̓̈͒̎͒̎̈͌͆̔̓̉̑̈́̊̋̽̈́́̏̑́̎͐́̕̕͘̕͜͜͝͝͝͝͠͠͝͠͝ͅi̷̢̨̧̨̠̩̫̙͇̳͕̼͕̼͓̖̖̺̻̳̻͉̱̯̯̠͕̝͈͍̦͓̘̰̱̭͎̲̫̹͍̠̤͔̟̣̥̳͍̝̲͉͙̮͚̦͕̞͑̑̃̚͜ñ̴̡̨̨̧̨̛̞͈͉̥̠̻̲͚̮̯͇̫̘̫͖̯̙̠͖̼͚̗̯̼̖͚̥̺̼̬̤͇̘̣̗̞͔̪̗̟͔͕̼̫̤͍̦̹̝͚̼̠̙̰̻̦͖̬͚̬̦̲̬̱̗͙̙̰̗͙̤̳̖̞̪̟͍̭͓͖͔̣̂̃̔̎̃͆͌̿͌̏̎̇̕̚͜͜͜͝͝͝ ̷̡̨̨̢̧̧̢̧̛̛̹̤̤̝͍̖̥̫̙̱͚̞̯̩̩͙̺̖̦̬͙̣̹̘͍͈͔͕̝̯̰̙̮̝̙̭͉̱̣͍͚͉̮̟̯͖̗̖̞̤͔̩̯̩͚̲̟͚̦̦̠̣̹̗̙̗͓͕̽̿͛̋̈́͌͐̄̑̾͆͐͂̎̒̉̋͌̿̊̅͂̋͋̂̇̎͋̐̃̐̃̓͌̌̊̇͋̾̍̀̊͂͋̍̈̅͛̈̓͆̓̈́̎̕͘͘͠͝͝͝ͅa̶̧̧͎͎͎͖̟̭͓̮̲̼͇͚̟̠̝̲͓̣̻̩͉̻͖̬̟̦͍̼͎̝̥̟̙̪͕̮̳̹̿̍͑̃̈́̈̊̎̄̎̓̎̈́̇͋̆̑̒̾̉̀͑̇͒̾̒̈̏͆̅͌̓̚̚̕͜͜͝͝ͅd̸̡̢̧̻̥̙͚̟̣̘̦͉̯͇͓̼̹͎͓͇̼̖͚̰͙͓̥̻͔̬̤̳̞̲̪̤͉͙̼͓̬̺̰̩̱͙̞̱̩͚̎̏̌̒̓̔͆̔̅͋̍̌̊͂̆͂̃̈́̿̃͊̓̀̑͛̃͑̅͆̈́͐͌̃̈̃̀̈́́̇̋̋̌́̿͊̔̉̒̊̀̈́̽͘͜͜͜͠͠͠͝͝ͅͅͅv̷̡̢̭̹̩̼̩̳͚̰̳̩̠͇̫̣͎͖̣̦͔͈͕̬̟̳̫̪̞̤̦̼̼̤͚̗̝̮̹̠̭̩̹̞̦̬̲͚̣͍̠̯̮͈̊̈̎̐̀̆̈́̒͌̍̔̆̀͑̎̀́̑̓̊̾̉̓̇̐̿̓̿̔̂̾̐̐̈̈́̇͛̆̇̂͌̀͐̓̏̔̃͌̔̓́̀̈́͛̔̽̍̏̒͛̋͗̅̈́͛̒̉̐͂́͋̓̆͘̚̕̕͘͘̚͜͝͝͝͝͝͠͠͝ͅa̴̡̧̨̧̧̨̛̛̛̯̠̟̗̥̺̳̙̹̦̣̜̲̲͎͙̜̖̣͇̥̬̼̬̣̜̱̮̤̼̜̝̯̞̮̻͉̗͔̱̲̜͓̖̖͖̙̥͐̀̐̈́̎͛̊̇̾̀̈́̎̐͒̃͆̐̽͐̿̂̍̌̌͌̊͋̈́͆͛̋̍̌͑̏̄̾̈́̽̒̈́̂̅̉̌͋͐͌̅̋̊͐̉͑͑̓͂͒̋͗̒̔͘̚͘̚͘͘͠͝͠͝͝ṇ̸̢̡̡̰̖̼̼̠̤̦̝̞̘̺̼̤̻̗͍̝̖̬̫̮̳͇̮̞̓̄̑̋͆̅̓̈́͑͆̒͌͌̎͆̏͗̓̌̂̒́͆͒͆͑̏͆̓̈́͌͌͛̈̾̇́̅͋̚̕͜͝͝͝͝͠ć̷̢̧̖͉̺̟͕͈̦̳̼̙̬͈̮̠͍̙̭̮͎̰͈̭̤̰̗͔̼͓̉̄̀̍̏͌͆̆̃̈́̑͒̆̈́̃̍̊̃͂̌̓͊̂̈́̅͒͌̓̍̀̈͗̌͌̆͊͑́͘͘̚͜͠͝͝ͅͅę̵̢̡̨̢̧̨̨̧̛̛̻̬̞̬̖̯͓̫͔̟͇̳̯̻̻͖͕̙̟͖̱̥̲͔̺͇̥̻̦̭͕͖̰͙̰͔̦͔̘̬̙̝̺̫̱̞̮̖̪̘̦͚̺͈̯̜̙͓͒̂̓̍͌̈́͐͌̄̒́̅̾̎̂́̔̒̓͂̀͊͋̈́̔̅͒̔̆̾̍̓́̆̅̒̐̈͛̐̐̀̇̀̔͐̎͑̒́̈̈̂̈́͒̔͑͆̈́̒̀͘͘͜͜͝͝ͅͅͅ.̵̧̧̧̧̡̡̡͖̪̭̪̲͈̩̘̦͇̲̟̻̜̼̮͖̘̝̫̹̟̙͇̩̺̬̰̯͓̝͉͓̯͉͕͇̟̣̘̱̲̖̪̩̝̰͎̟͉̭̖̪̬̗͍̤̟̝͕̣̻̳̘̬͓̐̑͂̉̊̔̾͛̈͆̎̊̀̀̈́͑̅͒͐̽̑͂͛̾͆́̿̌̀̄̿́̿͑̿̎̈́̊̓̈́̓́̑̾͂͆̃̄̎̄̓̉͐̓̔̍̚̕̕̕͘͜͝͝͝ͅͅͅͅ";
});

evilButton.addEventListener('mouseleave', function() {
	buttonWarn.innerHTML = "Since the danger is behind, avoid";
	buttonWarn2.innerHTML = "You were warned in advance.";
});
*/
window.addEventListener('click',(event) => {
	if (event.button === 0) {
		const soundclone = clicksound.cloneNode();
		soundclone.play().catch(error => {
			console.log("fuck you", error);
		});
	}
	
});


document.addEventListener('keydown', function(event) {
console.log('key pressed ' + event.key);
if (event.key == 'E') {
window.open("evil.html");
} else if (event.key == 'C'){
window.open("crane.html");
}else if (event.key == 'I'){
	if(dev == 0){
window.close();
	}
}else if (event.key == 'J'){
	if(dev == 0){
window.close();
	}
}else if (event.key == 'Control'){
	if(dev == 0){
//window.close();
window.location.replace("https://www.google.com");
	}
}

});

document.addEventListener('keyup', function(event) {
console.log('Key upped ' + event.key);
});

function geo() {
//alert("hi!");
//window.open();
var lat1 = Math.floor(Math.random() * 19) - 9;
var lat2 = Math.floor(Math.random() * 10);
var sla1 = Math.floor(Math.random() * 10);
var sla2 = Math.floor(Math.random() * 10);
var sla3 = Math.floor(Math.random() * 10);
var sla4 = Math.floor(Math.random() * 10);
var sla5 = Math.floor(Math.random() * 10);
var sla6 = Math.floor(Math.random() * 10);
var sla7 = Math.floor(Math.random() * 10);

var lon1 = Math.floor(Math.random() * 19) - 9;
var lon2 = Math.floor(Math.random() * 10);
var slo1 = Math.floor(Math.random() * 10);
var slo2 = Math.floor(Math.random() * 10);
var slo3 = Math.floor(Math.random() * 10);
var slo4 = Math.floor(Math.random() * 10);
var slo5 = Math.floor(Math.random() * 10);
var slo6 = Math.floor(Math.random() * 10);
var slo7 = Math.floor(Math.random() * 10);

var lat = ""+lat1+""+lat2+"."+sla1+""+sla1+""+sla2+""+sla3+""+sla4+""+sla5+""+sla6+""+sla7+"";
var lon = ""+lon1+""+lon2+"."+slo1+""+slo1+""+slo2+""+slo3+""+slo4+""+slo5+""+slo6+""+slo7+"";

window.open("https://maps.google.com/?q="+lat+","+lon+"");
}

document.addEventListener('contextmenu', (event) => {
    console.log("Right click detected");
    event.preventDefault(); 
});
