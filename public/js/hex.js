console.log("hex.js has loaded");


//randomizing the code

var ra = Math.floor(Math.random() * 15);
var rb = Math.floor(Math.random() * 15);
var ga = Math.floor(Math.random() * 15);
var gb = Math.floor(Math.random() * 15);
var ba = Math.floor(Math.random() * 15);
var bb = Math.floor(Math.random() * 15);

//extra vars

var raa = 0;
var rba = 0;
var gaa = 0;
var gba = 0;
var baa = 0;
var bba = 0;

//turning numbers into letters where needed

const bg = document.getElementById('background') || document.body;
const backCol = window.getComputedStyle(bg);

if (ra == 10){
 raa = 'a'; 
} else if (ra == 11){
 raa = 'b'; 
} else if (ra == 12){
 raa = 'c'; 
} else if (ra == 13){
 raa = 'd'; 
} else if (ra == 14){
 raa = 'e'; 
} else if (ra == 15){
 raa = 'f'; 
} else {
 raa = ra;
}


if (rb == 10){
 rba = 'a'; 
} else if (rb == 11){
 rba = 'b'; 
} else if (rb == 12){
 rba = 'c'; 
} else if (rb == 13){
 rba = 'd'; 
} else if (rb == 14){
 rba = 'e'; 
} else if (rb == 15){
 rba = 'f'; 
} else {
 rba = rb;
}


if (ba == 10){
 baa = 'a'; 
} else if (ba == 11){
 baa = 'b'; 
} else if (ba == 12){
 baa = 'c'; 
} else if (ba == 13){
 baa = 'd'; 
} else if (ba == 14){
 baa = 'e'; 
} else if (ba == 15){
 baa = 'f'; 
} else {
 baa = ba;
}


if (bb == 10){
 bba = 'a'; 
} else if (bb == 11){
 bba = 'b'; 
} else if (bb == 12){
 bba = 'c'; 
} else if (bb == 13){
 bba = 'd'; 
} else if (bb == 14){
 bba = 'e'; 
} else if (bb == 15){
 bba = 'f'; 
} else {
 bba = bb;
}


if (ga == 10){
 gaa = 'a'; 
} else if (ga == 11){
 gaa = 'b'; 
} else if (ga == 12){
 gaa = 'c'; 
} else if (ga == 13){
 gaa = 'd'; 
} else if (ga == 14){
 gaa = 'e'; 
} else if (ga == 15){
 gaa = 'f'; 
} else {
 gaa = ga;
}


if (gb == 10){
 gba = 'a'; 
} else if (gb == 11){
 gba = 'b'; 
} else if (gb == 12){
 gba = 'c'; 
} else if (gb == 13){
 gba = 'd'; 
} else if (gb == 14){
 gba = 'e'; 
} else if (gb == 15){
 gba = 'f'; 
} else {
 gba = gb;
}

//making the whole hexcode one string

var hexcode = ""+raa+""+rba+""+baa+""+bba+""+gaa+""+gba+"";
//console.log(hexcode);

//set background to hex code

document.body.style.backgroundColor = "#" + hexcode;
const rgbValue = backCol.backgroundColor;

//when the button is clicked to guess

function game(){

//get the prompt box value

const promptBox = document.getElementById("currentGuess");
var guess = promptBox.value;

//remove V in future
//alert(guess);

//catch early if you are dead on
if (guess === "hack"){
alert(hexcode);
} else if (guess === "rgb") {
alert(rgbValue)
} else {
//alert("incorrect");
var rab = guess.charAt(0);
var rbb = guess.charAt(1);
var bab = guess.charAt(2);
var bbb = guess.charAt(3);
var gab = guess.charAt(4);
var gbb = guess.charAt(5);

var rac;
var rbc;
var bac;
var bbc;
var gac;
var gbc;

if (rab == "a"){
rac = 10;
} else if (rab == "b"){
rac = 11;
} else if (rab == "c"){
rac = 12;
} else if (rab == "d"){
rac = 13;
} else if (rab == "e"){
rac = 14;
} else if (rab == "f"){
rac = 15;
} else {
rac = Number(rab);
}

if (rbb == "a"){
rbc = 10;
} else if (rbb == "b"){
rbc = 11;
} else if (rbb == "c"){
rbc = 12;
} else if (rbb == "d"){
rbc = 13;
} else if (rbb == "e"){
rbc = 14;
} else if (rbb == "f"){
rbc = 15;
} else {
rbc = Number(rbb);
}

if (bab == "a"){
bac = 10;
} else if (bab == "b"){
bac = 11;
} else if (bab == "c"){
bac = 12;
} else if (bab == "d"){
bac = 13;
} else if (bab == "e"){
bac = 14;
} else if (bab == "f"){
bac = 15;
} else {
bac = Number(bab);
}

if (bbb == "a"){
bbc = 10;
} else if (bbb == "b"){
bbc = 11;
} else if (bbb == "c"){
bbc = 12;
} else if (bbb == "d"){
bbc = 13;
} else if (bbb == "e"){
bbc = 14;
} else if (bbb == "f"){
bbc = 15;
} else {
bbc = Number(bbb);
}

if (gab == "a"){
gac = 10;
} else if (gab == "b"){
gac = 11;
} else if (gab == "c"){
gac = 12;
} else if (gab == "d"){
gac = 13;
} else if (gab == "e"){
gac = 14;
} else if (gab == "f"){
gac = 15;
} else {
gac = Number(gab);
}

if (gbb == "a"){
gbc = 10;
} else if (gbb == "b"){
gbc = 11;
} else if (gbb == "c"){
gbc = 12;
} else if (gbb == "d"){
gbc = 13;
} else if (gbb == "e"){
gbc = 14;
} else if (gbb == "f"){
gbc = 15;
} else {
gbc = Number(gbb);
}
/*
//these are the original variables
console.log(ra);
console.log(rb);
console.log(ba);
console.log(bb);
console.log(ga);
console.log(gb);

//these are your guessed variables
console.log(rac);
console.log(rbc);
console.log(bac);
console.log(bbc);
console.log(gac);
console.log(gbc);
*/

var rad = Math.abs(rac - ra);
var rbd = Math.abs(rbc - rb);
var bad = Math.abs(bac - ba);
var bbd = Math.abs(bbc - bb);
var gad = Math.abs(gac - ga);
var gbd = Math.abs(gbc - gb);

var racc = 1-(rad/15);
var rbcc = 1-(rbd/15);
var bacc = 1-(bad/15);
var bbcc = 1-(bbd/15);
var gacc = 1-(gad/15);
var gbcc = 1-(gbd/15);

racc *= 100;
rbcc *= 100;
bacc *= 100;
bbcc *= 100;
gacc *= 100;
gbcc *= 100;

/*
//here are all the percentages
console.log(racc);
console.log(rbcc);
console.log(bacc);
console.log(bbcc);
console.log(gacc);
console.log(gbcc);
*/

rya = (racc + rbcc) / 2;
bya = (bacc + bbcc) / 2;
gya = (gacc + gbcc) / 2;

rya = Math.round(rya);
bya = Math.round(bya);
gya = Math.round(gya);

/*
console.log(rya);
console.log(bya);
console.log(gya);
*/

//higher or lower
/*
if (rac > ra){
console.log("too high!");
} else if (rac < ra) {
console.log("too low!");
} else {
console.log("correct!");
}

if (rbc > rb){
console.log("too high!");
} else if (rbc < rb) {
console.log("too low!");
} else {
console.log("correct!");
}

if (bac > ba){
console.log("too high!");
} else if (bac < ba) {
console.log("too low!");
} else {
console.log("correct!");
}

if (bbc > bb){
console.log("too high!");
} else if (bbc < bb) {
console.log("too low!");
} else {
console.log("correct!");
}

if (gac > ga){
console.log("too high!");
} else if (gac < ga) {
console.log("too low!");
} else {
console.log("correct!");
}

if (gbc > gb){
console.log("too high!");
} else if (gbc < gb) {
console.log("too low!");
} else {
console.log("correct!");
}
*/

tacc = (rya + bya + gya) / 3;
tacc = Math.round(tacc);

//final outputting
document.getElementById('prevGuess').innerHTML ="Your guess: #" + guess;
document.getElementById('prevAccuracy').innerHTML = "Your Accuracy : " + tacc;
//document.getElementById('prevRedAcc').innerHTML = rya;
//document.getElementById('prevGreenAcc').innerHTML = bya;
//document.getElementById('prevBlueAcc').innerHTML = gya;
document.getElementById('previGuess').style.backgroundColor = "#"+guess;


}


}

/*
document.addEventListener('keydown', function(event) {
console.log('key pressed ' + event.key);
if (event.key == 'A') {
window.open("absconditum.net");
} else if (event.key == 'C'){
window.open("crane.html");
}
*/






