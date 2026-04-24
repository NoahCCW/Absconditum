function activateEvil() {
alert('Evil');
let evilPerc = prompt('What percentage evil are you?');
if (evilPerc == "100") {
alert('Activating super evil program');
};
};

const topText = document.getElementById("welcome");
const chars = "𖤐𓃶🜏𓆗⸸𓆙𓁹𓄃𓁼࿈𖥠𓄋𓁿༗𓆣𓄀𓅇𓋹𓆱𓄂☸⛧⃝☽";

function changeTopTextChar() {
//let text = Array.from(topText.innerText);
//let textArray = Array.from(text);
let textArray = Array.from(topText.innerHTML);
const randomIndex = Math.floor(Math.random() * textArray.length);
const newChar = chars[Math.floor(Math.random() * chars.length)];
textArray[randomIndex] = newChar;
topText.innerText = textArray.join("");
}
setInterval(changeTopTextChar, 500);

function showhim() {
alert("The shift key will guide you on the origin site");
};

document.addEventListener('keydown', function(event) {
console.log('key pressed ' + event.key);
if (event.key == 'Control'){

window.location.replace("https://www.google.com");
}

});

document.addEventListener('contextmenu', (event) => {
    console.log("Right click detected");
    event.preventDefault(); 
});
