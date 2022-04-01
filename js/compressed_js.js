class EventEmitter{constructor(){this.events={}}on(a,b){return'object'!=typeof this.events[a]&&(this.events[a]=[]),this.events[a].push(b),()=>this.removeListener(a,b)}removeListener(a,b){if('object'==typeof this.events[a]){const c=this.events[a].indexOf(b);-1<c&&this.events[a].splice(c,1)}}emit(a,...b){'object'==typeof this.events[a]&&this.events[a].forEach(a=>a.apply(this,b))}once(a,b){const c=this.on(a,(...a)=>{c(),b.apply(this,a)})}}function domInjector(a){return function(b,c){Object.defineProperty(b,c,{get:function(){const b=document.querySelector(a);if(!b)throw new Error(`${c} queria receber elemento de selector ${a}, que não foi encontrado`);return Object.defineProperty(this,c,{value:b}),b}})}}class Controller{constructor(a){this.view=new a(this),document.addEventListener('DOMContentLoaded',()=>{this.startBehaviour()})}}class MainController{constructor(){this.mainEventController=new EventEmitter}}const mainController=new MainController;class View{constructor(a,b=null){this.controller=a,this.inicializeEvent(b)}inicializeEvent(a){return a?void mainController.mainEventController.on(a,()=>{this.inicializeElements()}):void document.addEventListener('DOMContentLoaded',()=>{this.inicializeElements()})}}class StaticConfigurations{initialPath(){return'.'}}const staticConfiguration=new StaticConfigurations,languageTranslations={};class SystemConfigurations{constructor(){this.selectedLanguage=''}addToLanguage(a,b){languageTranslations[a]=b}getLanguageTranslations(){return languageTranslations}setLanguage(a){this.selectedLanguage=a}translateWord(a){const b=languageTranslations[this.selectedLanguage];return b?b[a]||a:a}}const configuration=new SystemConfigurations;class Tech{constructor(a){this.name=a}}configuration.addToLanguage('english',{page_introduction:'Determined to be the best programmer I can be!',"tech-title":'Techs I know',emailing:'Email me!',name:'Name',message_to_send:'Give me a Message!',call_me_in:'Or call me in...',contacting:'Contacting',build_profile:'buildMyProfile',to_know_me:'For you to know a bit about me...',projects:'Projects',profile:'Profile',contacts:'Contact',from:'Country',age:'My age',likes:'I like',stuffILike:'Rpg, classical music and discord',cv_download:'You can also download my CV',click_here:'Click here!',email_sent:'Email sent!',thank_you:'Thank you for your time!',oh_no:'Oh no!',email_not_sent:'A problem happened! Your email wasn\'t sent!',email_problem:'Problem in email field!',bad_email:'Not a proper email!',name_problem:'Problem in name field!',short_name:'This name is too short!',send:'Send it'}),configuration.addToLanguage('portugues',{page_introduction:'Determinada a ser a melhor programadora que eu puder ser!',"tech-title":'Tecnologias que conhe\xE7o',emailing:'Me mande um email!',name:'Nome',message_to_send:'Me envie uma Mensagem!',call_me_in:'Ou me chame em..',contacting:'Para me contatar',build_profile:'construirMeuPerfil',to_know_me:'Para voc\xEA saber um pouco sobre mim...',projects:'Projetos',profile:'Perfil',contacts:'Contatos',from:'Pa\xEDs',likes:'gostos',age:'idade',stuffILike:'Rpg, musica classica e discord',cv_download:'Voce tambem pode fazer download do meu CV',email_sent:'Email enviado!',thank_you:'Obrigada pelo seu tempo!',oh_no:'Oh n\xE3o!',email_not_sent:'Aconteceu um erro e seu email n\xE3o foi enviado!',email_problem:'Problema no campo de email!',bad_email:'N\xE3o \xE9 um email v\xE1lido!',name_problem:'Problema no campo de nome!',short_name:'O nome \xE9 muito curto!',send:'Enviar',click_here:'Clique aqui'});var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};class ContactView extends View{constructor(a){super(a),this.contactFormSubmitListeners=[]}inicializeElements(){this.contactForm.addEventListener('submit',a=>{console.log('contactForm.addEventListener'),a.preventDefault();const b=new FormData(this.contactForm);this.contactFormSubmitListeners.forEach(c=>{c(a,b)})}),this.inputs=Array.from(this.contactForm.querySelectorAll('.contacts__element'))}listenForContactForm(a){console.log('listenForContactForm'),this.contactFormSubmitListeners.push(a)}emailSent(){this.contactFormBox.classList.add('contacts--closed')}}__decorate([domInjector('#contact-form-box')],ContactView.prototype,'contactFormBox',void 0),__decorate([domInjector('#contact-form')],ContactView.prototype,'contactForm',void 0);var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};class cvView extends View{inicializeElements(){mainController.mainEventController.on('finishedConfigurations',()=>{this.cvLink.setAttribute('href',`${staticConfiguration.initialPath()}/res/cv/cv_${configuration.selectedLanguage}.pdf`)})}}__decorate([domInjector('#cv')],cvView.prototype,'cvSection',void 0),__decorate([domInjector('#cv_link')],cvView.prototype,'cvLink',void 0);var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};const OPENED_HEADER='header--opened',CLOSED_HEADER='header--closed';class HeaderView extends View{constructor(a){super(a)}inicializeElements(){console.log('headerView.inicializeElements')}clickHeader(a){let b=a.target,c='header'===b.id||this.header.contains(b);return c?void this.openHeader():void this.closeHeader()}headerIsOpen(){return this.header.classList.contains(OPENED_HEADER)}changeHeaderState(){this.header.classList.toggle(CLOSED_HEADER),this.header.classList.toggle(OPENED_HEADER)}closeHeader(){let a=this.headerIsOpen();return this.header.classList.add(CLOSED_HEADER),this.header.classList.remove(OPENED_HEADER),a!=this.headerIsOpen()}openHeader(){this.header.classList.add(OPENED_HEADER),this.header.classList.remove(CLOSED_HEADER)}}__decorate([domInjector('#header')],HeaderView.prototype,'header',void 0);var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};class LanguageConfigurationView extends View{constructor(a){super(a,'startedConfigurations')}inicializeElements(){}getElementsToTranslate(){return Array.from(document.querySelectorAll('[to-translate]'))}getToMoveElements(){return[this.languageSelect]}changedLanguage(a,b=!1){if(b)return;this.languageSwitch.classList.remove('system-configurations__language-switch--hidden');const c=this.languageSwitch.querySelector('#'+a+'-case');setTimeout(()=>{c.classList.add('system-configurations__switch-case--selected')},3500)}}__decorate([domInjector('#language-switch')],LanguageConfigurationView.prototype,'languageSwitch',void 0),__decorate([domInjector('#language-choice-select')],LanguageConfigurationView.prototype,'languageSelect',void 0);var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};class ModeView extends View{inicializeElements(){}setCoverScreenMode(a){console.log('Adding screen-cover--'+a),this.coverScreen.classList.add('screen-cover--'+a)}removeCoverScreenMode(a){console.log('Removing screen-cover--'+a),this.coverScreen.classList.remove('screen-cover--'+a)}applyLoadingMode(){this.setCoverScreenMode('loading'),document.body.appendChild(this.loadingTitle),setTimeout(()=>{this.loadingTitle.classList.add('loading__title--loaded'),setTimeout(()=>{this.loadingTitle.remove(),this.setCoverScreenMode('loaded'),setTimeout(()=>{this.removeCoverScreenMode('loading')},3e3)},2e3)},1e3)}applyLightMode(){document.body.classList.toggle('body--light-mode')}changeUnfocus(a){return a?void this.setCoverScreenMode('unfocus'):void this.removeCoverScreenMode('unfocus')}}__decorate([domInjector('#change-mode_button')],ModeView.prototype,'changeModeButton',void 0),__decorate([domInjector('.screen-cover')],ModeView.prototype,'coverScreen',void 0),__decorate([domInjector('#loading-title')],ModeView.prototype,'loadingTitle',void 0);class PopupView{constructor(){}makePopup(a,b){a=configuration.translateWord(a),b=configuration.translateWord(b),this.removePopup(),this.popupDiv=this.createPopup(a,b),document.body.appendChild(this.popupDiv)}createPopup(a,b){let c=document.createElement('div');c.classList.add('popup');const d=document.createElement('h3');d.innerHTML=a,c.appendChild(d);const e=document.createElement('p');return e.innerHTML=b,c.appendChild(e),c}removePopup(){this.popupDiv&&(this.popupDiv.remove(),this.popupDiv=null)}}const popupView=new PopupView;var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};class ProfileView extends View{constructor(a){super(a),this.profileFieldObjects=[]}inicializeElements(){this.profileFields=Array.from(this.profileBody.querySelectorAll('.profile__column'))}buildProfileFields(){this.profileFields.forEach(a=>{let b=new ProfileField(a);this.profileFieldObjects.push(b)})}addFieldToProfile(a,b,c){a=configuration.translateWord(a);let d=document.createElement('tr');d.classList.add('profile__element'),d.classList.add('profile__column');let e=buildFieldTitle(a);d.appendChild(e);let f=buildFieldValue(a,b,c);d.appendChild(f),this.profileBody.appendChild(d);let g=new ProfileField(d,e,f);this.profileFieldObjects.push(g)}hideRawElements(){const a=Array.from(this.profile.getElementsByClassName('profile__key'));a.forEach(a=>{a.classList.add('profile__key--closed')}),this.buildProfileButton.classList.add('profile__key--closed'),setTimeout(()=>{this.buildProfileButton.remove()},1600)}listenProfileButton(a){this.buildProfileButton.addEventListener('click',a)}prettifyField(a){let b=a.fieldTitle,c=a.fieldValue;a.fieldElement.classList.add('profile__column--pretty'),this.prettifyTitleElement(b),this.prettifyValueElement(c)}prettifyProfile(){this.profile.classList.add('profile--pretty'),this.profile.classList.remove('profile--raw'),this.profileBody.classList.add('profile__body--pretty'),this.profileFieldObjects.forEach(a=>{this.prettifyField(a)})}prettifyTitleElement(a){a&&(a.classList.remove('profile__field-key'),a.classList.add('profile__field-title'))}prettifyValueElement(a){if(!a)return;a.classList.add('profile__value--pretty'),a.classList.remove('profile__element--raw-value');let b=a.getAttribute('not-raw');b=configuration.translateWord(b),a.innerHTML=b;let c=a.getAttribute('field_class');a.classList.toggle(c)}showHiddenFromRawElements(){const a=Array.from(this.profile.getElementsByClassName('profile__element--hidden-from-raw'));a.forEach(a=>{a.classList.remove('profile__element--hidden-from-raw')})}}__decorate([domInjector('#profile')],ProfileView.prototype,'profile',void 0),__decorate([domInjector('#profile__body')],ProfileView.prototype,'profileBody',void 0),__decorate([domInjector('#profile_button')],ProfileView.prototype,'buildProfileButton',void 0);function buildFieldTitle(a){let b=document.createElement('td'),c=configuration.translateWord(a);return b.setAttribute('to-translate',a),b.innerHTML=c,b.classList.add('profile__field-key'),b.classList.add('profile__element'),b}function buildFieldValue(a,b,c){let d=document.createElement('td');return d.innerHTML=c||b||'',d.classList.add('profile__value'),b&&d.setAttribute('not-raw',b),d.setAttribute('field_class',`${a}_value`),d}class ProfileField{constructor(a,b=null,c=null){this.fieldElement=a,this.fieldTitle=b,this.fieldValue=c,this.fieldElement=a,b||(this.fieldTitle=a.querySelector('.profile__field-key')),c||(this.fieldValue=a.querySelector('.profile__value'))}}var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};class ProjectFilesView extends View{constructor(a){super(a)}inicializeElements(){this.folderButtons=Array.from(document.querySelectorAll('[folder]')),this.projectFiles=Array.from(this.projectsFolderContainer.querySelectorAll('a')),console.log('projectFilesView.inicializeElements')}markProjectAsSelected(a){a.classList.remove('projects__project--selected'),void a.offsetWidth,a.classList.add('projects__project--selected')}setupProjectFile(a){const b=document.querySelector(`
    [project-name="${a.getAttribute('link-project-name')}"]`);b&&a.addEventListener('click',()=>{this.moveUserToProject(b)})}moveUserToProject(a){headerController.closeHeader(),this.projectsBox.scrollLeft=a.offsetLeft-this.projectsBox.offsetLeft,a.scrollIntoView(),this.markProjectAsSelected(a)}changeFilesSize(a){const b=a.nextElementSibling;b.classList.toggle('header__folder--closed');var c=Array.from(b.querySelectorAll('a'));c.forEach(a=>{a.classList.toggle('header__file--opened'),a.classList.toggle('header__file--closed')})}}__decorate([domInjector('#project-box')],ProjectFilesView.prototype,'projectsBox',void 0),__decorate([domInjector('#projects-buttons')],ProjectFilesView.prototype,'projectsFolderContainer',void 0);var __decorate=this&&this.__decorate||function(a,b,e,f){var g,h=arguments.length,c=3>h?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var j=a.length-1;0<=j;j--)(g=a[j])&&(c=(3>h?g(c):3<h?g(b,e,c):g(b,e))||c);return 3<h&&c&&Object.defineProperty(b,e,c),c};const BODY_CONFIG_MODE='body--config';class SystemConfigurationsView extends View{constructor(a){super(a,'startedConfigurations')}inicializeElements(){document.body.classList.add(BODY_CONFIG_MODE)}loadedConfigurations(a){if(a)return void document.body.classList.remove(BODY_CONFIG_MODE);const b=this.getToMoveElements();b.forEach(a=>{a.classList.add('system-configurations__input--closed')}),setTimeout(()=>{window.scrollTo(0,0),document.body.classList.remove(BODY_CONFIG_MODE);let a=this.configurationForm.parentElement;a.classList.add('system-configurations--closed'),setTimeout(()=>{a.remove()},5e3)},6e3)}getToMoveElements(){let a=this.configurationForm.parentElement,b=Array.from(a.querySelectorAll('.move-input'));return b}listenForm(a){this.configurationForm.addEventListener('submit',b=>{b.preventDefault(),a(b)})}template(a){let b='',c='';Object.keys(a).forEach(a=>{b+=`
        <option class="system-configurations__option" value="${a}">
        ${a}
                        </option>
            `,c+=`<p class="system-configurations__switch-case" 
                id="${a}-case"> 
                    case ${a}: 
                </p>
                
                <p class="system-configurations__switch-result"> 
                    return <img class="system-configurations__switch-image"
                        src="${staticConfiguration.initialPath()}/res/images/flags/${a}.png">;
                </p>`});let d=`
    <div class="system-configurations"> 
        <h2 class="system-configurations__title">
        System Configurations / Configurações de Sistema
        </h2> 
        <form id='configuration-form' class='system-configurations__form'> 
        <label for="language" class="move-input system-configurations__label"> 
            Pick the Language / Escolha a linguagem 
        </label>         
            <div class="system-configurations__input-container move-input">
                <select name="language" 
                label="Language" id="language-choice-select" 
                class="system-configurations__input system-configurations__select move-input">`+b+`  
                </select> 
            </div> 
            <label for="language" class="system-configurations__label move-input"> 
                Saving configurations / Salvando configurações 
            </label> 
            <div id="configuration-form-save-select-container"
            class="system-configurations__input-container move-input"> 
                <select label="Save configurations" 
                class="system-configurations__input system-configurations__select move-input"
                id="configuration-form-save-select" name="save-configurations"> 

                    <option class="system-configurations__option" value="none"> Don't save</option>
                    <option class="system-configurations__option" value="local">Save</option>
                    <option class="system-configurations__option" value="session"> Save for this session</option> 
                </select> 
            </div> 
            <input 
            class="system-configurations__confirm-button 
            system-configurations__input move-input"
            type="submit"
                form="configuration-form" value="Confirm"> 
        </form> 
        <div 
        id="language-switch" 
        class="system-configurations__language-switch system-configurations__language-switch--hidden"> 
            switch(language) { `+c+` 
        }
        </div> 
    </div>`;return d}}__decorate([domInjector('#configuration-form')],SystemConfigurationsView.prototype,'configurationForm',void 0);class TechsView extends View{constructor(a){super(a),this.techDisplays=[]}inicializeElements(){this.techLogos=Array.from(document.querySelectorAll('.techs__image')),this.techNames=Array.from(document.querySelectorAll('.techs__name')),this.buildTechObjects()}buildTechObjects(){this.techNames.forEach(a=>{const b=a.getAttribute('tech-name');let c=this.getTechLogoFromName(b);if(!c)throw new Error('Tech logo for '+b+' not found');let d=new TechDisplay(a,c);this.techDisplays.push(d)})}listenForTechNameHover(a,b){this.techDisplays.forEach(c=>{let d=c.techName,e=c.techImage;d.addEventListener('mouseover',()=>{a(d,e)}),d.addEventListener('mouseout',()=>{b(d,e)})})}getTechLogoFromName(a){for(let b=0;b<this.techLogos.length;b++){let c=this.techLogos[b],d=c.getAttribute('tech');if(d===a)return c}return null}selectTechImage(a){a.classList.remove('techs__image--unselected')}unselectTechs(){this.techLogos.forEach(a=>{a.classList.add('techs__image--unselected')})}removeUnselectFromTechLogos(){this.techLogos.forEach(a=>{a.classList.remove('techs__image--unselected')})}}class TechDisplay{constructor(a,b){this.techName=a,this.techImage=b}}class ContactController extends Controller{constructor(){super(ContactView)}startBehaviour(){this.listenContacts()}sendEmail(a,b){if(this.submitInfoValidated(b))return this.view.emailSent(),fetch('https://formspree.io/f/mdobzrbv',{method:'POST',body:b,headers:{Accept:'application/json'}}).then(a=>{a.ok?popupView.makePopup('email_sent','thank_you'):a.json().then(a=>{a.hasOwnProperty('errors')&&popupView.makePopup('oh_no','email_not_sent')})}).catch(a=>{throw popupView.makePopup('oh_no','email_not_sent'),a}),!1}submitInfoValidated(a){let b=a.get('name');if(b===void 0)throw new Error('name is undefined');if(3>b.length)return popupView.makePopup('name_problem','short_name'),!1;let c=a.get('email');if(c===void 0)throw new Error('email is undefined');return!!this.validateEmail(c)||(popupView.makePopup('email_problem','bad_email'),!1)}listenContacts(){this.view.listenForContactForm((a,b)=>{this.sendEmail(a,b)})}validateEmail(a){let b=/^\S+@\S+\.\S+$/;return!!a.match(b)}}let contactController=new ContactController;class HeaderController extends Controller{constructor(){super(HeaderView)}startBehaviour(){this.listenHeader()}listenHeader(){document.body.addEventListener('click',a=>{let b=this.view.headerIsOpen();this.view.clickHeader(a);let c=this.view.headerIsOpen();b!=c&&mainController.mainEventController.emit('headerChangedState',c)},!0)}closeHeader(){let a=this.view.closeHeader();a&&mainController.mainEventController.emit('headerChangedState',!1)}}const headerController=new HeaderController;class LanguageConfigurationsController extends Controller{constructor(){super(LanguageConfigurationView)}startBehaviour(){}startedConfigurations(){this.view.inicializeElements()}getLanguage(){return this.view.languageSelect.value.toLowerCase()}loadLanguage(a,b=!1){configuration.setLanguage(a),this.setLanguage(b)}setLanguage(a){this.view.changedLanguage(configuration.selectedLanguage,a);const b=this.view.getElementsToTranslate();b.forEach(a=>{let b=a.getAttribute('to-translate');b!==void 0&&(a.innerHTML=configuration.translateWord(b))})}}const languageConfigurations=new LanguageConfigurationsController;class ModeController extends Controller{constructor(){super(ModeView)}startBehaviour(){this.listenMode()}listenMode(){mainController.mainEventController.on('headerChangedState',a=>{this.view.changeUnfocus(a)}),console.log('Going to apply loading mode in screen cover'),this.view.applyLoadingMode(),mainController.mainEventController.on('startedConfigurations',()=>{})}}new ModeController;class ProfileController extends Controller{constructor(){super(ProfileView)}startBehaviour(){profileController.addAgeToProfile(),profileController.buildProfile(),profileController.listenProfileButton()}buildProfile(){this.view.buildProfileFields()}listenProfileButton(){this.view.listenProfileButton(this.prettify.bind(this))}prettify(){this.prettifyProfile(),this.view.hideRawElements(),this.view.showHiddenFromRawElements()}addAgeToProfile(){const a=new Date,b=new Date(2003,11,26);let c=a.getFullYear()-b.getFullYear();const d=a.getMonth()-b.getMonth();(0>d||0==d&&a.getDate()<b.getDate())&&c--,this.view.addFieldToProfile('age',c.toString(),null)}prettifyProfile(){this.view.prettifyProfile()}}let profileController=new ProfileController;class ProjectFilesController extends Controller{constructor(){super(ProjectFilesView)}startBehaviour(){projectFilesController.buildProjectFiles()}buildProjectFiles(){this.view.projectFiles.forEach(a=>{this.view.setupProjectFile(a)}),this.view.folderButtons.forEach(a=>{a.addEventListener('click',()=>{this.view.changeFilesSize(a)})})}}let projectFilesController=new ProjectFilesController;class SystemConfigurationsController extends Controller{constructor(){super(SystemConfigurationsView)}startBehaviour(){this.buildSystemConfigurations()}buildSystemConfigurations(){let a=this.attemptLoadConfigurations();if(!a){let a=this.view.template(configuration.getLanguageTranslations()),b=document.getElementById('configurations-div');b.innerHTML=a,mainController.mainEventController.emit('startedConfigurations'),this.view.listenForm(a=>{this.submitConfigurations(a)})}}attemptLoadConfigurations(){const a=sessionStorage.getItem('language')||localStorage.getItem('language');return!!a&&(window.addEventListener('load',()=>{languageConfigurations.loadLanguage(a,!0),this.view.loadedConfigurations(!0),mainController.mainEventController.emit('finishedConfigurations')}),!0)}submitConfigurations(){let a=languageConfigurations.getLanguage(),b=this.view.configurationForm.querySelector('#configuration-form-save-select');this.saveConfigurations(a,b),languageConfigurations.loadLanguage(a),this.view.loadedConfigurations(!1),mainController.mainEventController.emit('finishedConfigurations')}saveConfigurations(a,b){let c=b.value;this.saveConfiguration('language',a,c)}saveConfiguration(a,b,c){return'session'==c?void sessionStorage.setItem(a,b):'local'==c?void localStorage.setItem(a,b):void 0}}const systemConfigurationsController=new SystemConfigurationsController;class TechController extends Controller{constructor(){super(TechsView),this.techs=[]}startBehaviour(){techController.buildTechObjects(),techController.listenForTechHover()}buildTechObjects(){this.view.techNames.forEach(a=>{const b=a.getAttribute('tech-name');if(!b)throw new Error('nameOfTech (String) not found in techName (element)');let c=new Tech(b);this.techs.push(c)})}onTechNameOver(a,b){this.view.unselectTechs(),this.view.selectTechImage(b)}onTechNameOut(){this.view.removeUnselectFromTechLogos()}listenForTechHover(){this.view.listenForTechNameHover(this.onTechNameOver.bind(this),this.onTechNameOut.bind(this))}}let techController=new TechController;