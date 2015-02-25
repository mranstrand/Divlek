var pacman,
    pacmanDiv, updateStartTime, requestId, timeSinceLastUpdate;

function start() {

    pacmen = [];

    for (var i = 0; i < 300; i++) {
        pacmen.push(new Pacman());
    }

    updateStartTime = window.performance.now();
    requestId = window.requestAnimationFrame(update);

}

function update(timeStamp) {

    timeSinceLastUpdate = timeStamp - updateStartTime;
    updateStartTime = window.performance.now();

    //Updatera positioner
    for (var i = 0; i < pacmen.length; i++) {
        pacmen[i].move(timeSinceLastUpdate);
    }

    requestAnimationFrame(update);
}

function Pacman() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.speedX = Math.random() * 200 - 100; // Hastighet i px/s (slumpas mellan -100 och 100)
    this.speedY = Math.random() * 200 - 100; //Hastighet i px/s (slumpas mellan -100 och 100)
    this.pacmanDiv = document.createElement("div");
    this.pacmanDiv.className = "pacmanDiv";
    document.body.appendChild(this.pacmanDiv);

    this.move = function (timeSinceLastMove) {
        this.x += (timeSinceLastMove * this.speedX) / 1000;
        this.y += (timeSinceLastMove * this.speedY) / 1000;
        this.pacmanDiv.style.left = this.x + "px";
        this.pacmanDiv.style.top = this.y + "px";
    }

}