const text = "Cosmin is a future successful entrepreneur";

let idx = 0;

function writeText() {
    document.body.innerText = text.slice(0, idx);

    idx++;

    if (idx > text.length - 1) {
        idx = 0;
    }
}

setInterval(writeText, 125);