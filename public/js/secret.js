
const clicksound = new Audio('../audio/toolgun.wav');

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

window.addEventListener('click',(event) => {
	if (event.button === 0) {
		const soundclone = clicksound.cloneNode();
		soundclone.play().catch(error => {
			console.log("fuck you", error);
		});
	}
	
});

