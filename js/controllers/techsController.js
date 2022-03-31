import{Tech}from"../models/techModel.js";import{TechsView}from"../view/techsView.js";import Controller from"./controller.js";class TechController extends Controller{constructor(){super(TechsView),this.techs=[]}startBehaviour(){techController.buildTechObjects(),techController.listenForTechHover()}buildTechObjects(){this.view.techNames.forEach(e=>{const t=e.getAttribute("tech-name");let o=new Tech(t);this.techs.push(o)})}onTechNameOver(e,t){this.view.unselectTechs(),t.classList.remove("techs__image--unselected")}onTechNameOut(e,t){this.view.removeUnselectFromTechLogos()}listenForTechHover(){this.view.listenForTechNameHover(this.onTechNameOver.bind(this),this.onTechNameOut.bind(this))}}let techController=new TechController;