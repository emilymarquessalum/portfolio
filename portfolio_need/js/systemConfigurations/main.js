



import languageLoad from "./languageLoad.js";


let languageOptionsHTML = "";
let languageSwitchHTML = "";

Object.keys(languageLoad.getLanguageTranslations()).forEach((language) => {

    languageOptionsHTML += `
    <option value="${language}">
    ${language}
                    </option>
        `

        languageSwitchHTML +=
            `<p class="switch-case" id="${language}-case"> case ${language}: </p>
            <p class="switch-result"> return <img class="language-choice-img"
                    src="portfolio_need/res/flags/${language}.png">;</p>`
            

});

let systemConfigurationsHTML = `
<div class="system-configurations">

    <h2 class="system-configurations-title"> System Configurations / Configurações de Sistema</h2>

    <label for="language" class="move-input configuration-title"> Pick the Language / Escolha a linguagem </label>

    <form id='configuration-form'>




        <div class="configuration-input-container move-input">
            <select name="language" label="Language" id="language-choice-select" 
            class="configuration-input configuration-select move-input">`
  +   languageOptionsHTML
    + `  
            </select>

        </div>



        <label for="language" class="configuration-title move-input"> Saving configurations / Salvando configurações </label>

        <div id="configuration-form-save-select-container">

            <select label="Save configurations" 
            class="configuration-input configuration-select move-input"
            id="configuration-form-save-select" name="save-configurations"> 

            <option value="none"> Don't save</option>
            <option value="local">Save</option>
            <option value="session"> Save for this session</option>
            

            </select>
 

        </div>

    </form>


    <div id="language-switch" class="hidden-switch">

        switch(language) {
            `
            + languageSwitchHTML
        + `
    </div>


    <input class="configuration-input-container system-configurations-submit configuration-input
    move-input"
     type="submit"
        form="configuration-form" value="Confirm">


</div>`;

document.body.innerHTML = systemConfigurationsHTML + document.body.innerHTML; 

const configurationForm = document.getElementById("configuration-form");







const loadLanguage = languageLoad.loadLanguage;

document.body.classList.add("config");

const languageSelect = document.getElementById("language-choice-select");


function submitConfigurations(event) {

    event.preventDefault();

    let selectedLanguage = languageSelect.value.toLowerCase();

    let saveConfigurationsSelect = configurationForm.querySelector("#configuration-form-save-select");

    
    saveConfigurations(selectedLanguage, saveConfigurationsSelect);


    loadLanguage(selectedLanguage);

    loadedConfigurations(false);


}

function saveConfigurations(selectedLanguage, saveConfigurationsSelect) {

    let saveOption = saveConfigurationsSelect.value;

    if(saveOption == "session") {
        sessionStorage.setItem("language", selectedLanguage);
        return;
    }

    if(saveOption == 'local') {
        localStorage.setItem("language", selectedLanguage);
        return;
    }
    
}

function loadedConfigurations(fastStyle) {

    if (fastStyle) {
        configurationForm.parentElement.remove();
        document.body.classList.remove("config");

        return;
    }

    const inputs = Array.from(configurationForm.parentElement.querySelectorAll(".move-input"));
    inputs.push(languageSelect);
    inputs.forEach((input) => {
        input.classList.add("closed-configurations-input");
    })

    setTimeout(() => {
        window.scrollTo(0, 0);

        document.body.classList.remove("config");


        configurationForm.parentElement.classList.add("closed-configurations");

        setTimeout(() => { configurationForm.parentElement.remove(); }, 3000);


    }, 5000)
}


window.addEventListener("load", () => {



    const savedSelectedLanguage =
         sessionStorage.getItem("language") || localStorage.getItem("language");


    if (savedSelectedLanguage) {

        loadLanguage(savedSelectedLanguage, true);
        loadedConfigurations(true);
        return;
    }

    configurationForm.addEventListener("submit", submitConfigurations);

});




