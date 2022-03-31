import View from"./view.js";const OPENED_HEADER="header--opened",CLOSED_HEADER="header--closed",HEADER_ID="header";class HeaderView extends View{constructor(e){super(e)}inicializeElements(){this.header=document.getElementById(HEADER_ID),console.log("headerView.inicializeElements")}clickHeader(e){let s=e.target;"header"===s.id||this.header.contains(s)?this.openHeader():this.closeHeader()}headerIsOpen(){return this.header.classList.contains(OPENED_HEADER)}changeHeaderState(){this.header.classList.toggle(CLOSED_HEADER),this.header.classList.toggle(OPENED_HEADER)}closeHeader(){let e=this.headerIsOpen();return this.header.classList.add(CLOSED_HEADER),this.header.classList.remove(OPENED_HEADER),e!=this.headerIsOpen()}openHeader(){this.header.classList.add(OPENED_HEADER),this.header.classList.remove(CLOSED_HEADER)}}export default HeaderView;