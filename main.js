/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadContactPage.js":
/*!********************************!*\
  !*** ./src/loadContactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContactPage(){
    let content = document.getElementById("content");
    let phoneTitle = document.createElement("h1");
    let phoneNumber = document.createElement("p");
    phoneTitle.innerHTML="Phone"
    phoneNumber.innerHTML="As of now, we have no active phone number. Service is hard to come by in this part of the world. If you must contact us \
                            by phone, grab an old rotary phone and make sure it is disconnected. Then press it up against your ear, speak into it and place your order.\
                            Odds on this are fifty-fifty but we might be able to hear you even if you wont be able to hear us.";
    phoneNumber.classList.add("contactPhone");

    let address = document.createElement("p");
    address.innerHTML="Unfortunately we are not at liberty to state our current address. It is up to you to stumble upon us. When the time is right, we're sure you will. We will be more than happy to serve you when that time arrives.";
    
    content.append(phoneTitle,phoneNumber,address);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addTitle () {
    let content = document.getElementById("content");
    let titleText = document.createElement("div");
    titleText.classList.add("homepageTitle","homepage");
    titleText.innerHTML=("The Bathhouse Restaurant");
    content.appendChild(titleText);
};

function addDescription() {
    let content = document.getElementById("content");
    let description = document.createElement("p");
    description.innerHTML="Step into the enchanting world of the Bathhouse Restaurant, where every visit is a journey into culinary bliss and magical experiences. As the proud owner, I welcome you to immerse yourself in a dining adventure unlike any other. <br>&nbsp;<br>\
    Nestled within the bustling spirit realm, our Bathhouse Restaurant is a haven of warmth and hospitality. From the moment you enter, you're greeted by the soothing melodies of the bathhouse's lively atmosphere and the tantalizing aroma of delectable dishes wafting through the air.<br>&nbsp;<br>\
    Our menu is a fusion of traditional flavors and fantastical creations, crafted with care to delight the senses and ignite the imagination. Indulge in savory delights like steaming bowls of ramen, crispy tempura, and succulent grilled meats, each dish prepared with the finest ingredients and served with a dash of magic. <br>&nbsp;<br>\
    But it's not just the food that sets us apart; it's the entire experience. Dine amidst the whimsical backdrop of our bathhouse, where you might catch glimpses of spirited creatures and mystical beings going about their business. Relax in our cozy booths or sit at the bustling communal tables, where laughter and conversation flow freely.<br>&nbsp;<br> \
    Whether you're seeking a memorable meal with loved ones or simply craving a taste of the extraordinary, the Bathhouse Restaurant invites you to join us on an unforgettable culinary adventure. Come, step through our doors and let the magic of spirited dining sweep you away.<br>&nbsp;<br>";
    description.classList.add("homepageDescription","homepage");
    content.appendChild(description);
}
function loadHomePage(){
    addTitle();
    addDescription();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);


/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenuItem(name,description,imageURL,price){
    
    let container = document.createElement('div');
    let content = document.getElementById("content");
    container.classList.add("menuItem");

    let nameAndImage = document.createElement('div');
    nameAndImage.classList.add("nameAndImage");

    let itemName = document.createElement('h1');
    itemName.innerHTML=name;
    itemName.classList.add("menuItemName");

    let itemPrice = document.createElement('p');
    itemPrice.innerHTML = price;
    itemPrice.classList.add("itemPrice");

    let itemDesc = document.createElement('p');
    itemDesc.innerHTML = description;

    let image = document.createElement("img");
    image.src=imageURL;
    image.classList.add("menuImage");
    
    nameAndImage.append(itemName,image,itemPrice);
    container.append(nameAndImage,itemDesc);
    content.append(container);
    console.log("loadMenu");
}

function createMenuPage(){
    
    createMenuItem("Aji ifry","Aji Fry is a traditional Japanese home-cooking dish. Butterflied horse mackerel is coated in breadcrumbs and deep-fried to a perfect golden colour. The method of butterflying the fish is unique as it opens the fish from the dorsal side instead of the belly side.","/restaurantPage/images/ajiFry.avif","$12.99");
    createMenuItem("Bento","This is Bento box that contains sticky rice, sausage, gfried potatoes and grilled leeks.","/restaurantPage/images/bento.webp","$10.99");
    createMenuItem("Breakfast","Fried eggs and bacon, cooked with Calcifer's special flame.","/restaurantPage/images/breakfast.png","$12.99");
    createMenuItem("Egg On Toast","A fried egg served on top of a slice of toasted wheat bread.","/restaurantPage/images/eggOnToast.avif","$7.99");
    createMenuItem("Mackerel","Tender and juicy mackerel served with our special sauce.","/restaurantPage/images/mackerel.avif","$16.99");
    createMenuItem("Onigiri","This is onigiri, a rice ball made from white rice formed into circular shape and wrapped in nori.","/restaurantPage/images/onigiri.webp","$5.99");
    createMenuItem("Pancakes","Delicious made to order pancakes served with sausage and strawberries.","/restaurantPage/images/pancakes.avif","$8.99");
    createMenuItem("Siberia","Castella Siberia, a cake extremely popular in Japan in the 1920s and 1930s, made from a sort of sponge named kasutera or castella and filled with a layer of red bean paste made from the famous azuki.","/restaurantPage/images/siberia.png","$4.99");
    createMenuItem("Spaghetti","Buttery spaghetti lovingly slathered in our special sauce and served with meatballs.","/restaurantPage/images/spaghetti.jpg","$11.99");
    createMenuItem("All you can eat special","All you can eat. No one will stop you.","/restaurantPage/images/image01.jpg","$100");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage */ "./src/loadHomePage.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadContactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadContactPage */ "./src/loadContactPage.js");



function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
function createButton(name, domElement){
    let dom=document.getElementById(domElement);
    let button = document.createElement("button");
    button.classList.add("BTN");
    button.textContent=name;
    dom.appendChild(button);
    return button;
};

const addNavButtons = ()=>{
    console.log("loadHomePage.js")

    let homeButton = createButton("Home","nav");
    homeButton.id="homeButton";
    let menuButton = createButton("Menu","nav");
    menuButton.id="menuButton";
    let contactButton = createButton("Contact","nav");
    contactButton.id="contactButton";
};

addNavButtons();
(0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__["default"])();

let homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click",()=>{
    clearBox("content");
    (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__["default"])();
})

let menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click",()=>{
    clearBox("content");
    (0,_loadMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

let contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click",()=>{
    clearBox("content");
    (0,_loadContactPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
})

console.log("?IDK");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ2hCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJRQUEyUTtBQUMzUSxzU0FBc1M7QUFDdFMsK1VBQStVO0FBQy9VLG1EQUFtRCw2U0FBNlM7QUFDaFcsK1JBQStSO0FBQy9SO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7VUM1QzdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNGO0FBQ1U7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBaUI7QUFDckIsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2xvYWRDb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2xvYWRIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2xvYWRNZW51LmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCl7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGxldCBwaG9uZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbGV0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwaG9uZVRpdGxlLmlubmVySFRNTD1cIlBob25lXCJcclxuICAgIHBob25lTnVtYmVyLmlubmVySFRNTD1cIkFzIG9mIG5vdywgd2UgaGF2ZSBubyBhY3RpdmUgcGhvbmUgbnVtYmVyLiBTZXJ2aWNlIGlzIGhhcmQgdG8gY29tZSBieSBpbiB0aGlzIHBhcnQgb2YgdGhlIHdvcmxkLiBJZiB5b3UgbXVzdCBjb250YWN0IHVzIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSBwaG9uZSwgZ3JhYiBhbiBvbGQgcm90YXJ5IHBob25lIGFuZCBtYWtlIHN1cmUgaXQgaXMgZGlzY29ubmVjdGVkLiBUaGVuIHByZXNzIGl0IHVwIGFnYWluc3QgeW91ciBlYXIsIHNwZWFrIGludG8gaXQgYW5kIHBsYWNlIHlvdXIgb3JkZXIuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9kZHMgb24gdGhpcyBhcmUgZmlmdHktZmlmdHkgYnV0IHdlIG1pZ2h0IGJlIGFibGUgdG8gaGVhciB5b3UgZXZlbiBpZiB5b3Ugd29udCBiZSBhYmxlIHRvIGhlYXIgdXMuXCI7XHJcbiAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFBob25lXCIpO1xyXG5cclxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhZGRyZXNzLmlubmVySFRNTD1cIlVuZm9ydHVuYXRlbHkgd2UgYXJlIG5vdCBhdCBsaWJlcnR5IHRvIHN0YXRlIG91ciBjdXJyZW50IGFkZHJlc3MuIEl0IGlzIHVwIHRvIHlvdSB0byBzdHVtYmxlIHVwb24gdXMuIFdoZW4gdGhlIHRpbWUgaXMgcmlnaHQsIHdlJ3JlIHN1cmUgeW91IHdpbGwuIFdlIHdpbGwgYmUgbW9yZSB0aGFuIGhhcHB5IHRvIHNlcnZlIHlvdSB3aGVuIHRoYXQgdGltZSBhcnJpdmVzLlwiO1xyXG4gICAgXHJcbiAgICBjb250ZW50LmFwcGVuZChwaG9uZVRpdGxlLHBob25lTnVtYmVyLGFkZHJlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTsiLCJmdW5jdGlvbiBhZGRUaXRsZSAoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJob21lcGFnZVRpdGxlXCIsXCJob21lcGFnZVwiKTtcclxuICAgIHRpdGxlVGV4dC5pbm5lckhUTUw9KFwiVGhlIEJhdGhob3VzZSBSZXN0YXVyYW50XCIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkRGVzY3JpcHRpb24oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MPVwiU3RlcCBpbnRvIHRoZSBlbmNoYW50aW5nIHdvcmxkIG9mIHRoZSBCYXRoaG91c2UgUmVzdGF1cmFudCwgd2hlcmUgZXZlcnkgdmlzaXQgaXMgYSBqb3VybmV5IGludG8gY3VsaW5hcnkgYmxpc3MgYW5kIG1hZ2ljYWwgZXhwZXJpZW5jZXMuIEFzIHRoZSBwcm91ZCBvd25lciwgSSB3ZWxjb21lIHlvdSB0byBpbW1lcnNlIHlvdXJzZWxmIGluIGEgZGluaW5nIGFkdmVudHVyZSB1bmxpa2UgYW55IG90aGVyLiA8YnI+Jm5ic3A7PGJyPlxcXHJcbiAgICBOZXN0bGVkIHdpdGhpbiB0aGUgYnVzdGxpbmcgc3Bpcml0IHJlYWxtLCBvdXIgQmF0aGhvdXNlIFJlc3RhdXJhbnQgaXMgYSBoYXZlbiBvZiB3YXJtdGggYW5kIGhvc3BpdGFsaXR5LiBGcm9tIHRoZSBtb21lbnQgeW91IGVudGVyLCB5b3UncmUgZ3JlZXRlZCBieSB0aGUgc29vdGhpbmcgbWVsb2RpZXMgb2YgdGhlIGJhdGhob3VzZSdzIGxpdmVseSBhdG1vc3BoZXJlIGFuZCB0aGUgdGFudGFsaXppbmcgYXJvbWEgb2YgZGVsZWN0YWJsZSBkaXNoZXMgd2FmdGluZyB0aHJvdWdoIHRoZSBhaXIuPGJyPiZuYnNwOzxicj5cXFxyXG4gICAgT3VyIG1lbnUgaXMgYSBmdXNpb24gb2YgdHJhZGl0aW9uYWwgZmxhdm9ycyBhbmQgZmFudGFzdGljYWwgY3JlYXRpb25zLCBjcmFmdGVkIHdpdGggY2FyZSB0byBkZWxpZ2h0IHRoZSBzZW5zZXMgYW5kIGlnbml0ZSB0aGUgaW1hZ2luYXRpb24uIEluZHVsZ2UgaW4gc2F2b3J5IGRlbGlnaHRzIGxpa2Ugc3RlYW1pbmcgYm93bHMgb2YgcmFtZW4sIGNyaXNweSB0ZW1wdXJhLCBhbmQgc3VjY3VsZW50IGdyaWxsZWQgbWVhdHMsIGVhY2ggZGlzaCBwcmVwYXJlZCB3aXRoIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgYW5kIHNlcnZlZCB3aXRoIGEgZGFzaCBvZiBtYWdpYy4gPGJyPiZuYnNwOzxicj5cXFxyXG4gICAgQnV0IGl0J3Mgbm90IGp1c3QgdGhlIGZvb2QgdGhhdCBzZXRzIHVzIGFwYXJ0OyBpdCdzIHRoZSBlbnRpcmUgZXhwZXJpZW5jZS4gRGluZSBhbWlkc3QgdGhlIHdoaW1zaWNhbCBiYWNrZHJvcCBvZiBvdXIgYmF0aGhvdXNlLCB3aGVyZSB5b3UgbWlnaHQgY2F0Y2ggZ2xpbXBzZXMgb2Ygc3Bpcml0ZWQgY3JlYXR1cmVzIGFuZCBteXN0aWNhbCBiZWluZ3MgZ29pbmcgYWJvdXQgdGhlaXIgYnVzaW5lc3MuIFJlbGF4IGluIG91ciBjb3p5IGJvb3RocyBvciBzaXQgYXQgdGhlIGJ1c3RsaW5nIGNvbW11bmFsIHRhYmxlcywgd2hlcmUgbGF1Z2h0ZXIgYW5kIGNvbnZlcnNhdGlvbiBmbG93IGZyZWVseS48YnI+Jm5ic3A7PGJyPiBcXFxyXG4gICAgV2hldGhlciB5b3UncmUgc2Vla2luZyBhIG1lbW9yYWJsZSBtZWFsIHdpdGggbG92ZWQgb25lcyBvciBzaW1wbHkgY3JhdmluZyBhIHRhc3RlIG9mIHRoZSBleHRyYW9yZGluYXJ5LCB0aGUgQmF0aGhvdXNlIFJlc3RhdXJhbnQgaW52aXRlcyB5b3UgdG8gam9pbiB1cyBvbiBhbiB1bmZvcmdldHRhYmxlIGN1bGluYXJ5IGFkdmVudHVyZS4gQ29tZSwgc3RlcCB0aHJvdWdoIG91ciBkb29ycyBhbmQgbGV0IHRoZSBtYWdpYyBvZiBzcGlyaXRlZCBkaW5pbmcgc3dlZXAgeW91IGF3YXkuPGJyPiZuYnNwOzxicj5cIjtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJob21lcGFnZURlc2NyaXB0aW9uXCIsXCJob21lcGFnZVwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpe1xyXG4gICAgYWRkVGl0bGUoKTtcclxuICAgIGFkZERlc2NyaXB0aW9uKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVQYWdlO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLGRlc2NyaXB0aW9uLGltYWdlVVJMLHByaWNlKXtcclxuICAgIFxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xyXG5cclxuICAgIGxldCBuYW1lQW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVBbmRJbWFnZS5jbGFzc0xpc3QuYWRkKFwibmFtZUFuZEltYWdlXCIpO1xyXG5cclxuICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBpdGVtTmFtZS5pbm5lckhUTUw9bmFtZTtcclxuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbU5hbWVcIik7XHJcblxyXG4gICAgbGV0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBwcmljZTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVByaWNlXCIpO1xyXG5cclxuICAgIGxldCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1EZXNjLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmM9aW1hZ2VVUkw7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwibWVudUltYWdlXCIpO1xyXG4gICAgXHJcbiAgICBuYW1lQW5kSW1hZ2UuYXBwZW5kKGl0ZW1OYW1lLGltYWdlLGl0ZW1QcmljZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKG5hbWVBbmRJbWFnZSxpdGVtRGVzYyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkTWVudVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKXtcclxuICAgIFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJBamkgaWZyeVwiLFwiQWppIEZyeSBpcyBhIHRyYWRpdGlvbmFsIEphcGFuZXNlIGhvbWUtY29va2luZyBkaXNoLiBCdXR0ZXJmbGllZCBob3JzZSBtYWNrZXJlbCBpcyBjb2F0ZWQgaW4gYnJlYWRjcnVtYnMgYW5kIGRlZXAtZnJpZWQgdG8gYSBwZXJmZWN0IGdvbGRlbiBjb2xvdXIuIFRoZSBtZXRob2Qgb2YgYnV0dGVyZmx5aW5nIHRoZSBmaXNoIGlzIHVuaXF1ZSBhcyBpdCBvcGVucyB0aGUgZmlzaCBmcm9tIHRoZSBkb3JzYWwgc2lkZSBpbnN0ZWFkIG9mIHRoZSBiZWxseSBzaWRlLlwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9hamlGcnkuYXZpZlwiLFwiJDEyLjk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJCZW50b1wiLFwiVGhpcyBpcyBCZW50byBib3ggdGhhdCBjb250YWlucyBzdGlja3kgcmljZSwgc2F1c2FnZSwgZ2ZyaWVkIHBvdGF0b2VzIGFuZCBncmlsbGVkIGxlZWtzLlwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9iZW50by53ZWJwXCIsXCIkMTAuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIkJyZWFrZmFzdFwiLFwiRnJpZWQgZWdncyBhbmQgYmFjb24sIGNvb2tlZCB3aXRoIENhbGNpZmVyJ3Mgc3BlY2lhbCBmbGFtZS5cIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvYnJlYWtmYXN0LnBuZ1wiLFwiJDEyLjk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJFZ2cgT24gVG9hc3RcIixcIkEgZnJpZWQgZWdnIHNlcnZlZCBvbiB0b3Agb2YgYSBzbGljZSBvZiB0b2FzdGVkIHdoZWF0IGJyZWFkLlwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9lZ2dPblRvYXN0LmF2aWZcIixcIiQ3Ljk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJNYWNrZXJlbFwiLFwiVGVuZGVyIGFuZCBqdWljeSBtYWNrZXJlbCBzZXJ2ZWQgd2l0aCBvdXIgc3BlY2lhbCBzYXVjZS5cIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvbWFja2VyZWwuYXZpZlwiLFwiJDE2Ljk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJPbmlnaXJpXCIsXCJUaGlzIGlzIG9uaWdpcmksIGEgcmljZSBiYWxsIG1hZGUgZnJvbSB3aGl0ZSByaWNlIGZvcm1lZCBpbnRvIGNpcmN1bGFyIHNoYXBlIGFuZCB3cmFwcGVkIGluIG5vcmkuXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL29uaWdpcmkud2VicFwiLFwiJDUuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIlBhbmNha2VzXCIsXCJEZWxpY2lvdXMgbWFkZSB0byBvcmRlciBwYW5jYWtlcyBzZXJ2ZWQgd2l0aCBzYXVzYWdlIGFuZCBzdHJhd2JlcnJpZXMuXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL3BhbmNha2VzLmF2aWZcIixcIiQ4Ljk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJTaWJlcmlhXCIsXCJDYXN0ZWxsYSBTaWJlcmlhLCBhIGNha2UgZXh0cmVtZWx5IHBvcHVsYXIgaW4gSmFwYW4gaW4gdGhlIDE5MjBzIGFuZCAxOTMwcywgbWFkZSBmcm9tIGEgc29ydCBvZiBzcG9uZ2UgbmFtZWQga2FzdXRlcmEgb3IgY2FzdGVsbGEgYW5kIGZpbGxlZCB3aXRoIGEgbGF5ZXIgb2YgcmVkIGJlYW4gcGFzdGUgbWFkZSBmcm9tIHRoZSBmYW1vdXMgYXp1a2kuXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL3NpYmVyaWEucG5nXCIsXCIkNC45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiU3BhZ2hldHRpXCIsXCJCdXR0ZXJ5IHNwYWdoZXR0aSBsb3ZpbmdseSBzbGF0aGVyZWQgaW4gb3VyIHNwZWNpYWwgc2F1Y2UgYW5kIHNlcnZlZCB3aXRoIG1lYXRiYWxscy5cIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvc3BhZ2hldHRpLmpwZ1wiLFwiJDExLjk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJBbGwgeW91IGNhbiBlYXQgc3BlY2lhbFwiLFwiQWxsIHlvdSBjYW4gZWF0LiBObyBvbmUgd2lsbCBzdG9wIHlvdS5cIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvaW1hZ2UwMS5qcGdcIixcIiQxMDBcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tICcuL2xvYWRIb21lUGFnZSc7XHJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tICcuL2xvYWRNZW51JztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gJy4vbG9hZENvbnRhY3RQYWdlJztcclxuZnVuY3Rpb24gY2xlYXJCb3goZWxlbWVudElEKVxyXG57XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKG5hbWUsIGRvbUVsZW1lbnQpe1xyXG4gICAgbGV0IGRvbT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21FbGVtZW50KTtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJCVE5cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQ9bmFtZTtcclxuICAgIGRvbS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmNvbnN0IGFkZE5hdkJ1dHRvbnMgPSAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkSG9tZVBhZ2UuanNcIilcclxuXHJcbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcIkhvbWVcIixcIm5hdlwiKTtcclxuICAgIGhvbWVCdXR0b24uaWQ9XCJob21lQnV0dG9uXCI7XHJcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcIk1lbnVcIixcIm5hdlwiKTtcclxuICAgIG1lbnVCdXR0b24uaWQ9XCJtZW51QnV0dG9uXCI7XHJcbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcIkNvbnRhY3RcIixcIm5hdlwiKTtcclxuICAgIGNvbnRhY3RCdXR0b24uaWQ9XCJjb250YWN0QnV0dG9uXCI7XHJcbn07XHJcblxyXG5hZGROYXZCdXR0b25zKCk7XHJcbmxvYWRIb21lUGFnZSgpO1xyXG5cclxubGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVCdXR0b25cIik7XHJcblxyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBjbGVhckJveChcImNvbnRlbnRcIik7XHJcbiAgICBsb2FkSG9tZVBhZ2UoKTtcclxufSlcclxuXHJcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QnV0dG9uXCIpO1xyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBjbGVhckJveChcImNvbnRlbnRcIik7XHJcbiAgICBjcmVhdGVNZW51UGFnZSgpO1xyXG59KVxyXG5cclxubGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RCdXR0b25cIik7XHJcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGNsZWFyQm94KFwiY29udGVudFwiKTtcclxuICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZyhcIj9JREtcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==