//alert("hello");
const jumpSound = new Audio("jump.mp3");
const gameOverSound = new Audio("death.mp3")
let character = document.getElementById("character");
let block = document.getElementById("block");
function jump() {
    jumpSound.play();

    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate")
    }, 500);

}

let checkDead = setInterval(function () {


    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));


    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("Left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = " none";
        block.style.display = "none";
        gameOverSound.play()
        alert("u loose")
        return;
    }
}, 100);
