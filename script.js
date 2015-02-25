var pacman,
    pacmanDiv, updateStartTime, requestId, timeSinceLastUpdate, c, ctx;

function start() {

    pacmen = [];

    for (var i = 0; i < 300; i++) {
        pacmen.push(new Pacman());
    }

    updateStartTime = window.performance.now();
    requestId = window.requestAnimationFrame(update);
    c = document.getElementById("c");
    ctx = c.getContext("2d");
}

function update(timeStamp) {

    timeSinceLastUpdate = timeStamp - updateStartTime;
    updateStartTime = window.performance.now();

    ctx.clearRect(0, 0, 800, 600);

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
        //this.pacmanDiv.style.left = this.x + "px";
        //this.pacmanDiv.style.top = this.y + "px";
        ctx.fillRect(this.x, this.y, 100, 100);

    }

}