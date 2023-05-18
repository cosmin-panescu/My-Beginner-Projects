const text = document.getElementById('text');
const prog = 'My Name Is Cosmin';
let i = 1;

setInterval(writeText, 150);

function writeText() {

    text.innerText = prog.slice(0, i);

    i++;

    if(i > prog.length){
        i = 1;
    }
}