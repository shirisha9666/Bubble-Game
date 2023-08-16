var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 85; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}


function runtimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeerout").textContent = timer
        }
        else {
            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game is Over</h1>`
        }

    }, 1000)

}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

document.querySelector("#pbtm").
    addEventListener("click", function (dets) {
        var clickednum = (Number(dets.target.textContent))
        // console.log(Number(dets.target.textContent))
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();

        }


    })



makeBubble()
runtimer();
getNewHit();
// increaseScore();
