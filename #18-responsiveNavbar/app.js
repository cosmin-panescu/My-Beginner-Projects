const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll(".nav-links li");

    //Toggle nav
    burger.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
        
    //Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        }
        else{
            // daca faceam doar partea de mai jos, fara 'if', animatiile mergeau doar prima data cand apasam pe burger icon, 
            // dar noi vrem ca animatiile sa functioneze mereu cand activam butonul burger

            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();