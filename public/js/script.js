console.log("ȃ̵̢̯͎͖̘͕̝̙̼̖̲̮̭̯̱͎̬̞̟̘̖͕̀̂́͗̔̀̈́̍̓̋̌̎͗͛͆̈́̈̅͛̇̈́̋̉̔̄̀̽̀͆͋̈͘͘͘͘͜͝͝ͅb̵̛̛̜̱̣͌̆̃̂̒͂̒̔̾̈́͂̑̅̈́̓͒̈́̏͌̀͂́̈́͋͛̆̃͂̿͆̍̇͗͌͆́͆̍̂̉̈͑̍̓̓͌̌̀͗̒̌̍̕̕̚̕̕͝͠ͅs̵̡̛̛͓̬̻̼̼͓̠̩̬͓̠̺͎̬͈̠̲̖̯̺̣̙̮̬̞͓̪͇̙̈̅̏̈́͋̆̐́́͋̔̇̈́̿̐̈̒̓͌̓̈͋̾̈́̾̐̓̋̄͌̍̚̚̚̚̚̕͜͝ͅͅc̶̡̨̛̠̝̬͈̭̳͈͓͖͙̘̺̪͕͓͇̣̻̘͍͈͔̹̥͚̳̻̦͓̺̹͍͉̥͖̟͑̈́̑̀́̇̉͊́̄̓́̽̑͗̋͘ǫ̵̢̩͔̠͕̞͓̗͓̀̓̎̎̑͗̃͒͂͊̓͌͋̐̃̔͊̏͌͌̃͛̌̎̑̊̏̃͋͌̊̎̑̿̅̆͑̍̚̚̕̕͠͠͝ͅń̵̡̧̳̪̣̼͔̫͓͚͍̬͕̼͚̦̱̱̦̥̥̈́͌͂̔̋͑̔͊͐̊̑͘̕d̶̛̪͙̩̬̟͎͉̮͖̖̯̂̆̅̍̌̀̿̀̒̏̆͂̈̈́͂̐̑̌̑̒̉͌͋̏͑̉̀͊̓̈́͋̈́̚̚͘͘͘͝ị̶̢̧̢̧̛̣͚̺̞͙̗͔̥̭͖͓̲̪̝͈̮̝̞̲̱̼͍̇͂̄̈̆̇̄̈́́̈̉̈́̄͑̃͊͊̃̄̈́̓̈́͋́̓̈́̀̏̚͘̕͠͝͝͝ͅt̶̨̨̨̰̦̹͕̝̰̩̻̯͓̝̳͈̺̳̥͎̻̯̮̱̭̼̪̞̜̫̹̪͍͚͙̣͙͚̟͊͊͐̋͐͋͗͋͂͒̄̀͋͊̓̅͘͜͜͝͠ͅͅų̶̨̡̣̝̹͖̖̱̠̼̺͎̳͚̣̬̫̖̳͕̯͓̜̲̼̟̫̥̤̻̰̜̹͕̻̙̫͈̻͍̻̤͇̱̊̏͋̾̈́̄̽̏̀͌͑̍͐̍̑́͆̈́̃͛̓̅͐̿͐̃̾͆̏́̒̀͐̆͗͂̇̿̅̚̕͘͘̚͜͝͠͠͠ͅͅm̴̢̢̨͈̳͎͈̥̻̦̞̦̬͑̈́́̀̽̀͒̈́̈́͗́̔̌̓̀̈͐̃̇̄̎̊͌̇̊̒̃͊̌͒̑̓͒̉̇̏̏͐̑͊̂́̉̿̉̓͐̚̚̕̚̕͘͘̚͜͠͝͠");

const clicksound = new Audio('../audio/drop.wav');
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

function frankspeak(){
	var messages = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
	var message = messages[Math.floor(Math.random()*messages.length)];
	
	/*yandere dev code incoming...*/
	
	
	if (message == "1") {
		alert("How can you determine whether a sequence is arithmetic?");
	}else if (message == "2") {
		alert("Guy purchased a rare stamp for $820 in 2001. If the value of the stamp increases by 10% per year, how much will the stamp be worth in 2010?");
	}else if (message == "3") {
		alert("I'm raining, but it's about interests and momentum. For example, if I deliver goods more than twice, the price is cheap. People say there's nothing that can become exclusive website content. I had the chance to spend an hour here, and it felt like I could travel freely in Japan, hire a car, have a tour guide, and access things like public banks, post offices, registered mail addresses, etc.");
	}else if (message == "4") {
		alert("The human symbol is a golden fish, let it be there.");
	}else if (message == "5") {
		alert("This means wrong.");
	}else if (message == "6") {
		alert("Since the danger is behind, avoid");
	}else if (message == "7") {
		alert("You were warned in advance.");
	}else if (message == "8") {
		alert("i̸̧̢̨̨̨̨̨̢̡̧̨̨̡̨̡̨̨̢̧̨̧̡̡̧̨̛̛̛̛̛̛̛͇̥̥̜̟̳̰̞̬̠̗͖̬̪͓̲̯̯͓̗͓̜̗̤̭̗̣̟̜͉͇̜̤̹͉̗͓̻̘̻͙̻̺͓̫͙̝̟̟͈̰̱̪̠̫͎̹̭̼̩̦̬̱̣̣͖̥̫͙̘̺̟͓̠͎̗͇̖̣̳͎̭̠̼̳̭̠̝͙̗̝̲̟̱͉̟̩͈̙̥͈̜͙̙͚̼̫̣̘͚̝̱̰̝̖͍͎̪̲̰͓͚̜̘̬̺̝̣͚̘̠̙̜͕͎̣̪̬͖͙͚͚̲͔͈̯͚͖̳̲͔͖̹̯̠̠̰̞͈̟͖̬͈̞̥͔̩̪̩̼̳̞̪͖̖͖̤̩̖͔̭̝͈̬̠̙͕͉̰͎̞̟͖̩̼͍͔̹͚̱̹̮͖̳̜̫̱̞͉̱̻̙̹͓̫̭͇̩͙̠͖̲̙̘͕̪̝͙̞̯̤̥̰̭͚̺̲̹͍͇͈̜̤̱̪̱͈̱̞̮̗̯̲͊̒͌̃̓̒̀̿̇͂̀̏̈́͛̊͊͊́̈́̐̾̓̔̐̅̂̋́̀̄̽̈́̂̆̔̽͛̓͐̊̓̽̋̓͂͌͆͛͛̇̽̑̐͑̈́̈̎͂̋̾̌̔̄͑̓́̊̏̅̀̒̒̈́̊̍̊̂͂̀͒͋̌̿̈̂̏̎̋̓͒̅͛̑̈́̇̓̿̅́̈̋̉͋̿͑̔̽̄̿̋̈́͛̀̑̌̾̏͛͆̿͊̒̓́̌̾̂̇̈́̂̓̾̇̎̓͊́̍͆̊͒̓̃̊̍̔̐̆̄́̀̋̊̉̃̋͂̏͆̃͑̈́͛̌̽̈́̌͂̓̏̄̂̊͊̓̌́̏̎̈̄̑̀͛̀̔͐͋͆̓̀́̀͋͐̊̏̏̌͌́̉̏̽̽̿̂̐̈́́̏̓̎̍͊͋̎̇̈́̍͆̉̃̽̔̎͒̾̃̈́͌̌̏̚̕̕̕̚̚̕͘̕̕͘̕͜͜͜͜͜͠͠͝͠͝͝͝͝͝͠͝͝͝͝͝͝͠ͅͅͅͅͅͅͅ");
	}else if (message == "9") {
		alert("Allow pop ups!");
	}else if (message == "10") {
		alert("I thought that by using sound, I was going to start talking about some things. I thought that this is why I got this name. When I started talking like this, I thought that the only option for that was no. Don't go. I am going to give you an advertisement for a small candidate who started in Moratuwa. Let's see how this thing is done. This is why many things are happening. I think that it is possible to find out what happened. I think that for me, it is like this. Online trading loses online game.");
	}else if (message == "11") {
		alert("I think this is going to be done about mobile phones in Sri Lanka. Advertisements for Marxism in Dehiwala. If this is what you see, life is also after death. If this is what you say, life is also a huge victory. Reproduction by the President.");
	}else if (message == "12") {
		alert("Yitsheitq and other Ethiopian stories from Ethiopianlink. Pre-order this video from Ethiopianlink. Tirunesh is a hero. Tirunesh is a beautiful flower. Ethiopia is a union of secondary schools in the world. It is a beautiful flower. And on them, the eyes of the sleeping are in my heart. The beautiful flower is with death.");
	}else if (message == "13") {
		alert("It is very beautiful.");
	}else if (message == "14") {
		alert("A car, a three-year-old, a four-year-old, a five-year-old, a monster, a two-year-old, a three-year-old, a four-year-old, a child, a school, a teacher");
	}else if (message == "15") {
		alert("In fact, are all women who stay in Bali like those in the late stages of life considered commodities? I now have many online orders that explain everything. I stay here, but I personally feel that things will happen very quickly. Is it because in Japan, independent travel can be considered a very delicious thing? I like a report that said something.");
	}else if (message == "16") {
		alert("Try Absconditum's HexGuesser!");
	}else if (message == "17") {
		alert("Why are you wearing that stupid man suit?");
	}else if (message == "18") {
		alert("PoW Shield provides DDoS protection on OSI application layer by acting as a proxy that utilizes proof of work between the backend service and the end user. This project aims to provide an alternative to general anti-DDoS methods such as Google's ReCaptcha that has always been a pain to solve. Accessing a web service protected by PoW Shield has never been easier, simply go to the url, and your browser will do the rest of the verification automatically for you.");
	}else if (message == "19") {
		alert("Become the deleter");
	}else if (message == "20") {
		alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
	}else {
		alert("I am Frank");
	}
	
	
	
}

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
