//crane shit here bruh idk
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
