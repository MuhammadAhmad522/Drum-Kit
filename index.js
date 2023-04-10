// button detector
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
}
keyDetect();
// key detector

function keyDetect() {
    document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    })
}
 
// button Animation
function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    setTimeout (function (){
        activeButton.classList.remove("pressed");
    }, 100)
}

// Sound player
function makeSound(key) {

    switch (key) {
        case "w":
            var playSound = new Audio('./sounds/tom-1.mp3');
            playSound.play();
            break;

        case "a":
            var playSound = new Audio('./sounds/tom-2.mp3');
            playSound.play();
            break;

        case "s":
            var playSound = new Audio('./sounds/tom-3.mp3');
            playSound.play();
            break;

        case "d":
            var playSound = new Audio('./sounds/tom-4.mp3');
            playSound.play();
            break;

        case "j":
            var playSound = new Audio('./sounds/snare.mp3');
            playSound.play();
            break;

        case "k":
            var playSound = new Audio('./sounds/crash.mp3');
            playSound.play();
            break;

        case "l":
            var playSound = new Audio('./sounds/kick-bass.mp3');
            playSound.play();
            break;


        default:
            console.log(key);
            break;
    }


}



