

 
const techNames = Array.from(document.querySelectorAll(".tech-name"));
const techLogos = Array.from(document.querySelectorAll(".tech-logo"));



techNames.forEach((techName) => {

    
    techName.addEventListener("mouseover", () => {
        
        const nameOfTech = techName.getAttribute("tech-name");

        techLogos.forEach((techLogo) => {

            if(techLogo.getAttribute("tech") != nameOfTech) {
                techLogo.classList.add("off-image");
            } else {
                techLogo.classList.remove("off-image");
            }
        });

    });

    techName.addEventListener("mouseout", () => { 
        techLogos.forEach((techLogo) => {
            techLogo.classList.remove("off-image");
        });
    });


});





