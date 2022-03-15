




const configurationForm = document.getElementById("configuration-form");
 





import languageLoad from "./languageLoad.js";

const loadLanguage = languageLoad.loadLanguage; 

document.body.classList.add("config");

const languageSelect = document.getElementById("language-choice-select");

function submitConfigurations(event) {

    event.preventDefault();

    let selectedLanguage = languageSelect.value.toLowerCase();

    let saveConfigurations = configurationForm.querySelector("#configuration-form-save-checkbox").checked;

    if(saveConfigurations) {
        sessionStorage.setItem("language", selectedLanguage);
    }

    loadLanguage(selectedLanguage);

    loadedConfigurations(false);


}

function loadedConfigurations(fastStyle) {

    if(fastStyle) {
        configurationForm.parentElement.remove();
 
        return;
    }

    const inputs = Array.from(configurationForm.parentElement.querySelectorAll("input"));
    inputs.push(languageSelect);
    inputs.forEach((input) => {
        input.classList.add("closed-configurations-input");
    })

    setTimeout(() => {
        window.scrollTo(0, 0);

        document.body.classList.remove("config");


        configurationForm.parentElement.classList.add("closed-configurations");

        setTimeout(()=> {configurationForm.parentElement.remove();}, 3000);


    }, 5000)
}


window.addEventListener("load", () => {



    const sessionSelectedLanguage = sessionStorage.getItem("language");


    if (sessionSelectedLanguage) {
         
        loadLanguage(sessionSelectedLanguage, true);
        loadedConfigurations(true);
        return;
    }

    configurationForm.addEventListener("submit", submitConfigurations);

});




