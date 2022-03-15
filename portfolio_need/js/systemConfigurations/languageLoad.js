


var selectedLanguage;

function loadLanguage(newSelectedLanguage, fastStyle=false) {
 
    console.log(newSelectedLanguage);

    selectedLanguage = newSelectedLanguage;


    setLanguage(fastStyle);    
    
}

function setLanguage(fastStyle) {
 
    
    changedLanguage(fastStyle);
    

    const toTranslateObjects = Array.from(document.querySelectorAll("[to-translate]"));

    toTranslateObjects.forEach((element) => {

        element.innerHTML = translateWord(element.getAttribute("to-translate"));

    });
}


function changedLanguage(fastStyle) {
     
     if(fastStyle) {
         return;
     }

    languageSwitch.classList.remove("hidden-switch");
     
    const selectedCase = languageSwitch.querySelector("#" + selectedLanguage + "-case");


     setTimeout(()=> {
        selectedCase.classList.add("selected-case");}, 2500);


}



const languageSwitch = document.getElementById("language-switch");
 

const languageTranslations = {};

function addToLanguage(newLanguage, translations) {
    /*console.log("calling addToLanguage, " + newLanguage);*/
    languageTranslations[newLanguage] = translations;
}

function translateWord(key) {
    /*console.log("translating " + key + " with " + selectedLanguage);*/
    return languageTranslations[selectedLanguage][key]
}

export default { addToLanguage, translateWord, loadLanguage };