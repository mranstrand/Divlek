var x = 100,
    y = 100,
    gingerguyImg;

function start() {
    pacmanDiv = document.getElementById("pacman");
    animationStartTime = window.performance.now();
    requestId = window.requestAnimationFrame(draw);
}

function draw(timeStamp) {
    console.log((50 + (timeStamp - animationStartTime)) + "px");
    pacmanDiv.style.left = (50 + (timeStamp - animationStartTime) / 10) + "px";



    requestAnimationFrame(draw);
}