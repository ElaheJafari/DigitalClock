let digital = document.getElementById("Digital");

function currentTime() {
    let date = new Date();

    digital.innerHTML = date.getHours().toString().padStart(2, 0)
        + ":" + date.getMinutes().toString().padStart(2, 0)
        + ":" + date.getSeconds().toString().padStart(2, 0)
}

setInterval(currentTime)