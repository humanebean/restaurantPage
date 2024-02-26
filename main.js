/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    titleText.innerHTML=("The Bathhouse Restaurant");
    content.appendChild(titleText);
};

function addDescription() {
    let content = document.getElementById("content");
    let description = document.createElement("p");
    description.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
    
    createMenuItem("Aj ifry","Aji Fry) is a traditional Japanese home-cooking dish. Butterflied horse mackerel is coated in breadcrumbs and deep-fried to a perfect golden colour. The method of butterflying the fish is unique as it opens the fish from the dorsal side instead of the belly side.","/restaurantPage/images/ajiFry.avif","$12.99");
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
console.log("?IDK");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7OztVQzVDN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVk7QUFDaEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQixDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2xvYWRIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2xvYWRNZW51LmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZFRpdGxlICgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgbGV0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZVRleHQuaW5uZXJIVE1MPShcIlRoZSBCYXRoaG91c2UgUmVzdGF1cmFudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0bGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCl7XHJcbiAgICBhZGRUaXRsZSgpO1xyXG4gICAgYWRkRGVzY3JpcHRpb24oKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVBhZ2U7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsZGVzY3JpcHRpb24saW1hZ2VVUkwscHJpY2Upe1xyXG4gICAgXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XHJcblxyXG4gICAgbGV0IG5hbWVBbmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmFtZUFuZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJuYW1lQW5kSW1hZ2VcIik7XHJcblxyXG4gICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGl0ZW1OYW1lLmlubmVySFRNTD1uYW1lO1xyXG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtTmFtZVwiKTtcclxuXHJcbiAgICBsZXQgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVByaWNlLmlubmVySFRNTCA9IHByaWNlO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtUHJpY2VcIik7XHJcblxyXG4gICAgbGV0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbURlc2MuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLnNyYz1pbWFnZVVSTDtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51SW1hZ2VcIik7XHJcbiAgICBcclxuICAgIG5hbWVBbmRJbWFnZS5hcHBlbmQoaXRlbU5hbWUsaW1hZ2UsaXRlbVByaWNlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQobmFtZUFuZEltYWdlLGl0ZW1EZXNjKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRNZW51XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpe1xyXG4gICAgXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIkFqIGlmcnlcIixcIkFqaSBGcnkpIGlzIGEgdHJhZGl0aW9uYWwgSmFwYW5lc2UgaG9tZS1jb29raW5nIGRpc2guIEJ1dHRlcmZsaWVkIGhvcnNlIG1hY2tlcmVsIGlzIGNvYXRlZCBpbiBicmVhZGNydW1icyBhbmQgZGVlcC1mcmllZCB0byBhIHBlcmZlY3QgZ29sZGVuIGNvbG91ci4gVGhlIG1ldGhvZCBvZiBidXR0ZXJmbHlpbmcgdGhlIGZpc2ggaXMgdW5pcXVlIGFzIGl0IG9wZW5zIHRoZSBmaXNoIGZyb20gdGhlIGRvcnNhbCBzaWRlIGluc3RlYWQgb2YgdGhlIGJlbGx5IHNpZGUuXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2FqaUZyeS5hdmlmXCIsXCIkMTIuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIkJlbnRvXCIsXCJUaGlzIGlzIEJlbnRvIGJveCB0aGF0IGNvbnRhaW5zIHN0aWNreSByaWNlLCBzYXVzYWdlLCBnZnJpZWQgcG90YXRvZXMgYW5kIGdyaWxsZWQgbGVla3MuXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2JlbnRvLndlYnBcIixcIiQxMC45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQnJlYWtmYXN0XCIsXCJGcmllZCBlZ2dzIGFuZCBiYWNvbiwgY29va2VkIHdpdGggQ2FsY2lmZXIncyBzcGVjaWFsIGZsYW1lLlwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9icmVha2Zhc3QucG5nXCIsXCIkMTIuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIkVnZyBPbiBUb2FzdFwiLFwiQSBmcmllZCBlZ2cgc2VydmVkIG9uIHRvcCBvZiBhIHNsaWNlIG9mIHRvYXN0ZWQgd2hlYXQgYnJlYWQuXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2VnZ09uVG9hc3QuYXZpZlwiLFwiJDcuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIk1hY2tlcmVsXCIsXCJUZW5kZXIgYW5kIGp1aWN5IG1hY2tlcmVsIHNlcnZlZCB3aXRoIG91ciBzcGVjaWFsIHNhdWNlLlwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9tYWNrZXJlbC5hdmlmXCIsXCIkMTYuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIk9uaWdpcmlcIixcIlRoaXMgaXMgb25pZ2lyaSwgYSByaWNlIGJhbGwgbWFkZSBmcm9tIHdoaXRlIHJpY2UgZm9ybWVkIGludG8gY2lyY3VsYXIgc2hhcGUgYW5kIHdyYXBwZWQgaW4gbm9yaS5cIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvb25pZ2lyaS53ZWJwXCIsXCIkNS45OVwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiUGFuY2FrZXNcIixcIkRlbGljaW91cyBtYWRlIHRvIG9yZGVyIHBhbmNha2VzIHNlcnZlZCB3aXRoIHNhdXNhZ2UgYW5kIHN0cmF3YmVycmllcy5cIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvcGFuY2FrZXMuYXZpZlwiLFwiJDguOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIlNpYmVyaWFcIixcIkNhc3RlbGxhIFNpYmVyaWEsIGEgY2FrZSBleHRyZW1lbHkgcG9wdWxhciBpbiBKYXBhbiBpbiB0aGUgMTkyMHMgYW5kIDE5MzBzLCBtYWRlIGZyb20gYSBzb3J0IG9mIHNwb25nZSBuYW1lZCBrYXN1dGVyYSBvciBjYXN0ZWxsYSBhbmQgZmlsbGVkIHdpdGggYSBsYXllciBvZiByZWQgYmVhbiBwYXN0ZSBtYWRlIGZyb20gdGhlIGZhbW91cyBhenVraS5cIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvc2liZXJpYS5wbmdcIixcIiQ0Ljk5XCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJTcGFnaGV0dGlcIixcIkJ1dHRlcnkgc3BhZ2hldHRpIGxvdmluZ2x5IHNsYXRoZXJlZCBpbiBvdXIgc3BlY2lhbCBzYXVjZSBhbmQgc2VydmVkIHdpdGggbWVhdGJhbGxzLlwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9zcGFnaGV0dGkuanBnXCIsXCIkMTEuOTlcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIkFsbCB5b3UgY2FuIGVhdCBzcGVjaWFsXCIsXCJBbGwgeW91IGNhbiBlYXQuIE5vIG9uZSB3aWxsIHN0b3AgeW91LlwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9pbWFnZTAxLmpwZ1wiLFwiJDEwMFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4vbG9hZEhvbWVQYWdlJztcclxuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gJy4vbG9hZE1lbnUnO1xyXG5mdW5jdGlvbiBjbGVhckJveChlbGVtZW50SUQpXHJcbntcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24obmFtZSwgZG9tRWxlbWVudCl7XHJcbiAgICBsZXQgZG9tPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUVsZW1lbnQpO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIkJUTlwiKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudD1uYW1lO1xyXG4gICAgZG9tLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3QgYWRkTmF2QnV0dG9ucyA9ICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRIb21lUGFnZS5qc1wiKVxyXG5cclxuICAgIGxldCBob21lQnV0dG9uID0gY3JlYXRlQnV0dG9uKFwiSG9tZVwiLFwibmF2XCIpO1xyXG4gICAgaG9tZUJ1dHRvbi5pZD1cImhvbWVCdXR0b25cIjtcclxuICAgIGxldCBtZW51QnV0dG9uID0gY3JlYXRlQnV0dG9uKFwiTWVudVwiLFwibmF2XCIpO1xyXG4gICAgbWVudUJ1dHRvbi5pZD1cIm1lbnVCdXR0b25cIjtcclxuICAgIGxldCBjb250YWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKFwiQ29udGFjdFwiLFwibmF2XCIpO1xyXG4gICAgY29udGFjdEJ1dHRvbi5pZD1cImNvbnRhY3RCdXR0b25cIjtcclxufTtcclxuXHJcbmFkZE5hdkJ1dHRvbnMoKTtcclxubG9hZEhvbWVQYWdlKCk7XHJcblxyXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZUJ1dHRvblwiKTtcclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGNsZWFyQm94KFwiY29udGVudFwiKTtcclxuICAgIGxvYWRIb21lUGFnZSgpO1xyXG59KVxyXG5cclxubGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCdXR0b25cIik7XHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGNsZWFyQm94KFwiY29udGVudFwiKTtcclxuICAgIGNyZWF0ZU1lbnVQYWdlKCk7XHJcbn0pXHJcbmNvbnNvbGUubG9nKFwiP0lES1wiKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9