
const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500; // miliseconds ( duration of pointer to reach the whole circle)
const breatheTime = (totalTime / 5) * 2; // 3 second for each
const holdTime = totalTime / 5; // 1.5 seconds

breatheAnimation();

function breatheAnimation(){
    text.innerHTML = 'Breath In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';

        }, holdTime)
    }, breatheTime)
}

// to repeat after 'totalTime' time;
setInterval(breatheAnimation, totalTime);























