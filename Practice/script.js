function makeBubble() {
    var cluster = "";
    for (var i = 1; i <= 100; i++) {
        var res = Math.floor(Math.random() * 10)
        cluster += `<div class="bubble">${res}</div>`
        document.querySelector("#pbtm").innerHTML = cluster

    }
}
var time = 60
function timer() {
    setInterval(function () {
        time--
        document.querySelector("#TimeValue").textContent = time
    }, 1000)
}

makeBubble();
timer();