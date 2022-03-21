




const OPENED_HEADER = "opened_header";
const CLOSED_HEADER = "closed_header";

const coverScreen = document.querySelector(".cover-screen");

var header = document.getElementById("header");
 
   
/* ? */
document.body.addEventListener("click", 
clickHeader, 
true);


function clickHeader(event) {

    let element = event.target;
    
    let hasHeaderOrigin = element.id === 'header' || header.contains(element);
    if(!hasHeaderOrigin) {
        closeHeader();
        return;
    }

    openHeader();
}
 
function changeHeaderState() {

    header.classList.toggle(CLOSED_HEADER);
    header.classList.toggle(OPENED_HEADER);
}
 

export function closeHeader() {
    console.log("Close header");
    
    
    console.log(" classes : " + header.classList);
    header.classList.add(CLOSED_HEADER);
    header.classList.remove(OPENED_HEADER);
    
    console.log(" classes : " + header.classList);

    coverScreen.classList.remove("unfocus");

}

function openHeader() {

    console.log("opening header");
    
    console.log(" classes : " + header.classList);
    header.classList.add(OPENED_HEADER);
    header.classList.remove(CLOSED_HEADER);
    
    console.log(" classes : " + header.classList);

    console.log(header);
    coverScreen.classList.add("unfocus");
}
 