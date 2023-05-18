const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    // animation
    container.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'});

    //there are 4 images and we want to reset that number (counter) when it reach 4
    if(counter === 4){
        counter = -1;
    }
    counter++;

    container.style.backgroundImage = `url('img/bcg-${counter}.jpeg')`;
}

function prevSlide(){
    // animation
    container.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'});
   
    //when the counter is 0, we want it to go back to 5 (cause we have 4 images)
    if(counter === 0){
        counter = 5;
    }
    counter--;

    container.style.backgroundImage = `url('img/bcg-${counter}.jpeg')`;
}











