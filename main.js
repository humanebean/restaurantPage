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
    let container = document.createElement("div");
    let phoneTitle = document.createElement("h1");
    let phoneNumber = document.createElement("p");
    phoneTitle.innerHTML="Phone"
    phoneTitle.classList.add("contactHeader");
    phoneNumber.innerHTML="As of now, we have no active phone number. Service is hard to come by in this part of the world. If you must contact us \
                            by phone, grab an old rotary phone and make sure it is disconnected. Then press it up against your ear, speak into it and place your order.\
                            Odds on this are fifty-fifty but we might be able to hear you even if you wont be able to hear us.";
    phoneNumber.classList.add("contactPhone");

    let addressTitle = document.createElement("h1");
    addressTitle.innerHTML = "Address";
    addressTitle.classList.add("contactHeader");
    let address = document.createElement("p");
    address.innerHTML="Unfortunately we are not at liberty to state our current address. It is up to you to stumble upon us. When the time is right, we're sure you will. We will be more than happy to serve you when that time arrives.";
    
    container.classList.add("contactContainer");
    container.append(phoneTitle, phoneNumber, addressTitle, address);
    content.append(container);
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
    
    createMenuItem("Aji ifry","Aji Fry is a traditional Japanese home-cooking dish. Butterflied horse mackerel is coated in breadcrumbs and deep-fried to a perfect golden colour. The method of butterflying the fish is unique as it opens the fish from the dorsal side instead of the belly side.","https://github.com/humanebean/restaurantPage/raw/main/images/ajiFry.avif","$12.99");
    createMenuItem("Bento","This is Bento box that contains sticky rice, sausage, gfried potatoes and grilled leeks.","https://github.com/humanebean/restaurantPage/raw/main/images/bento.webp","$10.99");
    createMenuItem("Breakfast","Fried eggs and bacon, cooked with Calcifer's special flame.","https://github.com/humanebean/restaurantPage/blob/main/images/breakfast.png?raw=true","$12.99");
    createMenuItem("Egg On Toast","A fried egg served on top of a slice of toasted wheat bread.","https://github.com/humanebean/restaurantPage/raw/main/images/eggOnToast.avif","$7.99");
    createMenuItem("Mackerel","Tender and juicy mackerel served with our special sauce.","https://github.com/humanebean/restaurantPage/raw/main/images/mackerel.avif","$16.99");
    createMenuItem("Onigiri","This is onigiri, a rice ball made from white rice formed into circular shape and wrapped in nori.","https://github.com/humanebean/restaurantPage/raw/main/images/onigiri.webp","$5.99");
    createMenuItem("Pancakes","Delicious made to order pancakes served with sausage and strawberries.","https://github.com/humanebean/restaurantPage/raw/main/images/pancakes.avif","$8.99");
    createMenuItem("Siberia","Castella Siberia, a cake extremely popular in Japan in the 1920s and 1930s, made from a sort of sponge named kasutera or castella and filled with a layer of red bean paste made from the famous azuki.","https://github.com/humanebean/restaurantPage/blob/main/images/siberia.png?raw=true","$4.99");
    createMenuItem("Spaghetti","Buttery spaghetti lovingly slathered in our special sauce and served with meatballs.","https://github.com/humanebean/restaurantPage/blob/main/images/spaghetti.jpg?raw=true","$11.99");
    createMenuItem("All you can eat special","All you can eat. No one will stop you.","https://github.com/humanebean/restaurantPage/blob/main/images/image01.jpg?raw=true","$100");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDdkJoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMlFBQTJRO0FBQzNRLHNTQUFzUztBQUN0UywrVUFBK1U7QUFDL1UsbURBQW1ELDZTQUE2UztBQUNoVywrUkFBK1I7QUFDL1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7OztVQzVDN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0Y7QUFDVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVk7QUFDaEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFpQjtBQUNyQixDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9zcmMvbG9hZENvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3kvLi9zcmMvbG9hZEhvbWVQYWdlLmpzIiwid2VicGFjazovL3kvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKXtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGhvbmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxldCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGhvbmVUaXRsZS5pbm5lckhUTUw9XCJQaG9uZVwiXHJcbiAgICBwaG9uZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0SGVhZGVyXCIpO1xyXG4gICAgcGhvbmVOdW1iZXIuaW5uZXJIVE1MPVwiQXMgb2Ygbm93LCB3ZSBoYXZlIG5vIGFjdGl2ZSBwaG9uZSBudW1iZXIuIFNlcnZpY2UgaXMgaGFyZCB0byBjb21lIGJ5IGluIHRoaXMgcGFydCBvZiB0aGUgd29ybGQuIElmIHlvdSBtdXN0IGNvbnRhY3QgdXMgXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IHBob25lLCBncmFiIGFuIG9sZCByb3RhcnkgcGhvbmUgYW5kIG1ha2Ugc3VyZSBpdCBpcyBkaXNjb25uZWN0ZWQuIFRoZW4gcHJlc3MgaXQgdXAgYWdhaW5zdCB5b3VyIGVhciwgc3BlYWsgaW50byBpdCBhbmQgcGxhY2UgeW91ciBvcmRlci5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2RkcyBvbiB0aGlzIGFyZSBmaWZ0eS1maWZ0eSBidXQgd2UgbWlnaHQgYmUgYWJsZSB0byBoZWFyIHlvdSBldmVuIGlmIHlvdSB3b250IGJlIGFibGUgdG8gaGVhciB1cy5cIjtcclxuICAgIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0UGhvbmVcIik7XHJcblxyXG4gICAgbGV0IGFkZHJlc3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGFkZHJlc3NUaXRsZS5pbm5lckhUTUwgPSBcIkFkZHJlc3NcIjtcclxuICAgIGFkZHJlc3NUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEhlYWRlclwiKTtcclxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhZGRyZXNzLmlubmVySFRNTD1cIlVuZm9ydHVuYXRlbHkgd2UgYXJlIG5vdCBhdCBsaWJlcnR5IHRvIHN0YXRlIG91ciBjdXJyZW50IGFkZHJlc3MuIEl0IGlzIHVwIHRvIHlvdSB0byBzdHVtYmxlIHVwb24gdXMuIFdoZW4gdGhlIHRpbWUgaXMgcmlnaHQsIHdlJ3JlIHN1cmUgeW91IHdpbGwuIFdlIHdpbGwgYmUgbW9yZSB0aGFuIGhhcHB5IHRvIHNlcnZlIHlvdSB3aGVuIHRoYXQgdGltZSBhcnJpdmVzLlwiO1xyXG4gICAgXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250YWluZXJcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHBob25lVGl0bGUsIHBob25lTnVtYmVyLCBhZGRyZXNzVGl0bGUsIGFkZHJlc3MpO1xyXG4gICAgY29udGVudC5hcHBlbmQoY29udGFpbmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFBhZ2U7IiwiZnVuY3Rpb24gYWRkVGl0bGUgKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VUaXRsZVwiLFwiaG9tZXBhZ2VcIik7XHJcbiAgICB0aXRsZVRleHQuaW5uZXJIVE1MPShcIlRoZSBCYXRoaG91c2UgUmVzdGF1cmFudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTD1cIlN0ZXAgaW50byB0aGUgZW5jaGFudGluZyB3b3JsZCBvZiB0aGUgQmF0aGhvdXNlIFJlc3RhdXJhbnQsIHdoZXJlIGV2ZXJ5IHZpc2l0IGlzIGEgam91cm5leSBpbnRvIGN1bGluYXJ5IGJsaXNzIGFuZCBtYWdpY2FsIGV4cGVyaWVuY2VzLiBBcyB0aGUgcHJvdWQgb3duZXIsIEkgd2VsY29tZSB5b3UgdG8gaW1tZXJzZSB5b3Vyc2VsZiBpbiBhIGRpbmluZyBhZHZlbnR1cmUgdW5saWtlIGFueSBvdGhlci4gPGJyPiZuYnNwOzxicj5cXFxyXG4gICAgTmVzdGxlZCB3aXRoaW4gdGhlIGJ1c3RsaW5nIHNwaXJpdCByZWFsbSwgb3VyIEJhdGhob3VzZSBSZXN0YXVyYW50IGlzIGEgaGF2ZW4gb2Ygd2FybXRoIGFuZCBob3NwaXRhbGl0eS4gRnJvbSB0aGUgbW9tZW50IHlvdSBlbnRlciwgeW91J3JlIGdyZWV0ZWQgYnkgdGhlIHNvb3RoaW5nIG1lbG9kaWVzIG9mIHRoZSBiYXRoaG91c2UncyBsaXZlbHkgYXRtb3NwaGVyZSBhbmQgdGhlIHRhbnRhbGl6aW5nIGFyb21hIG9mIGRlbGVjdGFibGUgZGlzaGVzIHdhZnRpbmcgdGhyb3VnaCB0aGUgYWlyLjxicj4mbmJzcDs8YnI+XFxcclxuICAgIE91ciBtZW51IGlzIGEgZnVzaW9uIG9mIHRyYWRpdGlvbmFsIGZsYXZvcnMgYW5kIGZhbnRhc3RpY2FsIGNyZWF0aW9ucywgY3JhZnRlZCB3aXRoIGNhcmUgdG8gZGVsaWdodCB0aGUgc2Vuc2VzIGFuZCBpZ25pdGUgdGhlIGltYWdpbmF0aW9uLiBJbmR1bGdlIGluIHNhdm9yeSBkZWxpZ2h0cyBsaWtlIHN0ZWFtaW5nIGJvd2xzIG9mIHJhbWVuLCBjcmlzcHkgdGVtcHVyYSwgYW5kIHN1Y2N1bGVudCBncmlsbGVkIG1lYXRzLCBlYWNoIGRpc2ggcHJlcGFyZWQgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzIGFuZCBzZXJ2ZWQgd2l0aCBhIGRhc2ggb2YgbWFnaWMuIDxicj4mbmJzcDs8YnI+XFxcclxuICAgIEJ1dCBpdCdzIG5vdCBqdXN0IHRoZSBmb29kIHRoYXQgc2V0cyB1cyBhcGFydDsgaXQncyB0aGUgZW50aXJlIGV4cGVyaWVuY2UuIERpbmUgYW1pZHN0IHRoZSB3aGltc2ljYWwgYmFja2Ryb3Agb2Ygb3VyIGJhdGhob3VzZSwgd2hlcmUgeW91IG1pZ2h0IGNhdGNoIGdsaW1wc2VzIG9mIHNwaXJpdGVkIGNyZWF0dXJlcyBhbmQgbXlzdGljYWwgYmVpbmdzIGdvaW5nIGFib3V0IHRoZWlyIGJ1c2luZXNzLiBSZWxheCBpbiBvdXIgY296eSBib290aHMgb3Igc2l0IGF0IHRoZSBidXN0bGluZyBjb21tdW5hbCB0YWJsZXMsIHdoZXJlIGxhdWdodGVyIGFuZCBjb252ZXJzYXRpb24gZmxvdyBmcmVlbHkuPGJyPiZuYnNwOzxicj4gXFxcclxuICAgIFdoZXRoZXIgeW91J3JlIHNlZWtpbmcgYSBtZW1vcmFibGUgbWVhbCB3aXRoIGxvdmVkIG9uZXMgb3Igc2ltcGx5IGNyYXZpbmcgYSB0YXN0ZSBvZiB0aGUgZXh0cmFvcmRpbmFyeSwgdGhlIEJhdGhob3VzZSBSZXN0YXVyYW50IGludml0ZXMgeW91IHRvIGpvaW4gdXMgb24gYW4gdW5mb3JnZXR0YWJsZSBjdWxpbmFyeSBhZHZlbnR1cmUuIENvbWUsIHN0ZXAgdGhyb3VnaCBvdXIgZG9vcnMgYW5kIGxldCB0aGUgbWFnaWMgb2Ygc3Bpcml0ZWQgZGluaW5nIHN3ZWVwIHlvdSBhd2F5Ljxicj4mbmJzcDs8YnI+XCI7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VEZXNjcmlwdGlvblwiLFwiaG9tZXBhZ2VcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKXtcclxuICAgIGFkZFRpdGxlKCk7XHJcbiAgICBhZGREZXNjcmlwdGlvbigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lUGFnZTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSxkZXNjcmlwdGlvbixpbWFnZVVSTCxwcmljZSl7XHJcbiAgICBcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcclxuXHJcbiAgICBsZXQgbmFtZUFuZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lQW5kSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm5hbWVBbmRJbWFnZVwiKTtcclxuXHJcbiAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaXRlbU5hbWUuaW5uZXJIVE1MPW5hbWU7XHJcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1OYW1lXCIpO1xyXG5cclxuICAgIGxldCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtUHJpY2UuaW5uZXJIVE1MID0gcHJpY2U7XHJcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW1QcmljZVwiKTtcclxuXHJcbiAgICBsZXQgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRGVzYy5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1hZ2Uuc3JjPWltYWdlVVJMO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnVJbWFnZVwiKTtcclxuICAgIFxyXG4gICAgbmFtZUFuZEltYWdlLmFwcGVuZChpdGVtTmFtZSxpbWFnZSxpdGVtUHJpY2UpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChuYW1lQW5kSW1hZ2UsaXRlbURlc2MpO1xyXG4gICAgY29udGVudC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZE1lbnVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCl7XHJcbiAgICBcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQWppIGlmcnlcIixcIkFqaSBGcnkgaXMgYSB0cmFkaXRpb25hbCBKYXBhbmVzZSBob21lLWNvb2tpbmcgZGlzaC4gQnV0dGVyZmxpZWQgaG9yc2UgbWFja2VyZWwgaXMgY29hdGVkIGluIGJyZWFkY3J1bWJzIGFuZCBkZWVwLWZyaWVkIHRvIGEgcGVyZmVjdCBnb2xkZW4gY29sb3VyLiBUaGUgbWV0aG9kIG9mIGJ1dHRlcmZseWluZyB0aGUgZmlzaCBpcyB1bmlxdWUgYXMgaXQgb3BlbnMgdGhlIGZpc2ggZnJvbSB0aGUgZG9yc2FsIHNpZGUgaW5zdGVhZCBvZiB0aGUgYmVsbHkgc2lkZS5cIixcImh0dHBzOi8vZ2l0aHViLmNvbS9odW1hbmViZWFuL3Jlc3RhdXJhbnRQYWdlL3Jhdy9tYWluL2ltYWdlcy9hamlGcnkuYXZpZlwiLFwiJDEyLjk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJCZW50b1wiLFwiVGhpcyBpcyBCZW50byBib3ggdGhhdCBjb250YWlucyBzdGlja3kgcmljZSwgc2F1c2FnZSwgZ2ZyaWVkIHBvdGF0b2VzIGFuZCBncmlsbGVkIGxlZWtzLlwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2h1bWFuZWJlYW4vcmVzdGF1cmFudFBhZ2UvcmF3L21haW4vaW1hZ2VzL2JlbnRvLndlYnBcIixcIiQxMC45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQnJlYWtmYXN0XCIsXCJGcmllZCBlZ2dzIGFuZCBiYWNvbiwgY29va2VkIHdpdGggQ2FsY2lmZXIncyBzcGVjaWFsIGZsYW1lLlwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2h1bWFuZWJlYW4vcmVzdGF1cmFudFBhZ2UvYmxvYi9tYWluL2ltYWdlcy9icmVha2Zhc3QucG5nP3Jhdz10cnVlXCIsXCIkMTIuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIkVnZyBPbiBUb2FzdFwiLFwiQSBmcmllZCBlZ2cgc2VydmVkIG9uIHRvcCBvZiBhIHNsaWNlIG9mIHRvYXN0ZWQgd2hlYXQgYnJlYWQuXCIsXCJodHRwczovL2dpdGh1Yi5jb20vaHVtYW5lYmVhbi9yZXN0YXVyYW50UGFnZS9yYXcvbWFpbi9pbWFnZXMvZWdnT25Ub2FzdC5hdmlmXCIsXCIkNy45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiTWFja2VyZWxcIixcIlRlbmRlciBhbmQganVpY3kgbWFja2VyZWwgc2VydmVkIHdpdGggb3VyIHNwZWNpYWwgc2F1Y2UuXCIsXCJodHRwczovL2dpdGh1Yi5jb20vaHVtYW5lYmVhbi9yZXN0YXVyYW50UGFnZS9yYXcvbWFpbi9pbWFnZXMvbWFja2VyZWwuYXZpZlwiLFwiJDE2Ljk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJPbmlnaXJpXCIsXCJUaGlzIGlzIG9uaWdpcmksIGEgcmljZSBiYWxsIG1hZGUgZnJvbSB3aGl0ZSByaWNlIGZvcm1lZCBpbnRvIGNpcmN1bGFyIHNoYXBlIGFuZCB3cmFwcGVkIGluIG5vcmkuXCIsXCJodHRwczovL2dpdGh1Yi5jb20vaHVtYW5lYmVhbi9yZXN0YXVyYW50UGFnZS9yYXcvbWFpbi9pbWFnZXMvb25pZ2lyaS53ZWJwXCIsXCIkNS45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiUGFuY2FrZXNcIixcIkRlbGljaW91cyBtYWRlIHRvIG9yZGVyIHBhbmNha2VzIHNlcnZlZCB3aXRoIHNhdXNhZ2UgYW5kIHN0cmF3YmVycmllcy5cIixcImh0dHBzOi8vZ2l0aHViLmNvbS9odW1hbmViZWFuL3Jlc3RhdXJhbnRQYWdlL3Jhdy9tYWluL2ltYWdlcy9wYW5jYWtlcy5hdmlmXCIsXCIkOC45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiU2liZXJpYVwiLFwiQ2FzdGVsbGEgU2liZXJpYSwgYSBjYWtlIGV4dHJlbWVseSBwb3B1bGFyIGluIEphcGFuIGluIHRoZSAxOTIwcyBhbmQgMTkzMHMsIG1hZGUgZnJvbSBhIHNvcnQgb2Ygc3BvbmdlIG5hbWVkIGthc3V0ZXJhIG9yIGNhc3RlbGxhIGFuZCBmaWxsZWQgd2l0aCBhIGxheWVyIG9mIHJlZCBiZWFuIHBhc3RlIG1hZGUgZnJvbSB0aGUgZmFtb3VzIGF6dWtpLlwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2h1bWFuZWJlYW4vcmVzdGF1cmFudFBhZ2UvYmxvYi9tYWluL2ltYWdlcy9zaWJlcmlhLnBuZz9yYXc9dHJ1ZVwiLFwiJDQuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIlNwYWdoZXR0aVwiLFwiQnV0dGVyeSBzcGFnaGV0dGkgbG92aW5nbHkgc2xhdGhlcmVkIGluIG91ciBzcGVjaWFsIHNhdWNlIGFuZCBzZXJ2ZWQgd2l0aCBtZWF0YmFsbHMuXCIsXCJodHRwczovL2dpdGh1Yi5jb20vaHVtYW5lYmVhbi9yZXN0YXVyYW50UGFnZS9ibG9iL21haW4vaW1hZ2VzL3NwYWdoZXR0aS5qcGc/cmF3PXRydWVcIixcIiQxMS45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQWxsIHlvdSBjYW4gZWF0IHNwZWNpYWxcIixcIkFsbCB5b3UgY2FuIGVhdC4gTm8gb25lIHdpbGwgc3RvcCB5b3UuXCIsXCJodHRwczovL2dpdGh1Yi5jb20vaHVtYW5lYmVhbi9yZXN0YXVyYW50UGFnZS9ibG9iL21haW4vaW1hZ2VzL2ltYWdlMDEuanBnP3Jhdz10cnVlXCIsXCIkMTAwXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZVBhZ2UgZnJvbSAnLi9sb2FkSG9tZVBhZ2UnO1xyXG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSAnLi9sb2FkTWVudSc7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tICcuL2xvYWRDb250YWN0UGFnZSc7XHJcbmZ1bmN0aW9uIGNsZWFyQm94KGVsZW1lbnRJRClcclxue1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElEKS5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihuYW1lLCBkb21FbGVtZW50KXtcclxuICAgIGxldCBkb209ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tRWxlbWVudCk7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiQlROXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50PW5hbWU7XHJcbiAgICBkb20uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5jb25zdCBhZGROYXZCdXR0b25zID0gKCk9PntcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZEhvbWVQYWdlLmpzXCIpXHJcblxyXG4gICAgbGV0IGhvbWVCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJIb21lXCIsXCJuYXZcIik7XHJcbiAgICBob21lQnV0dG9uLmlkPVwiaG9tZUJ1dHRvblwiO1xyXG4gICAgbGV0IG1lbnVCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJNZW51XCIsXCJuYXZcIik7XHJcbiAgICBtZW51QnV0dG9uLmlkPVwibWVudUJ1dHRvblwiO1xyXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBjcmVhdGVCdXR0b24oXCJDb250YWN0XCIsXCJuYXZcIik7XHJcbiAgICBjb250YWN0QnV0dG9uLmlkPVwiY29udGFjdEJ1dHRvblwiO1xyXG59O1xyXG5cclxuYWRkTmF2QnV0dG9ucygpO1xyXG5sb2FkSG9tZVBhZ2UoKTtcclxuXHJcbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lQnV0dG9uXCIpO1xyXG5cclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgY2xlYXJCb3goXCJjb250ZW50XCIpO1xyXG4gICAgbG9hZEhvbWVQYWdlKCk7XHJcbn0pXHJcblxyXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJ1dHRvblwiKTtcclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgY2xlYXJCb3goXCJjb250ZW50XCIpO1xyXG4gICAgY3JlYXRlTWVudVBhZ2UoKTtcclxufSlcclxuXHJcbmxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0QnV0dG9uXCIpO1xyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBjbGVhckJveChcImNvbnRlbnRcIik7XHJcbiAgICBjcmVhdGVDb250YWN0UGFnZSgpO1xyXG59KVxyXG5cclxuY29uc29sZS5sb2coXCI/SURLXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=