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
function createMenuItem(name,description,imageURL){
    
    let container = document.createElement('div');
    let content = document.getElementById("content");
    container.classList.add("menuItem");

    let nameAndImage = document.createElement('div');
    nameAndImage.classList.add("nameAndImage");

    let itemName = document.createElement('h1');
    itemName.innerHTML=name;
    itemName.classList.add("menuItemName");

    let itemDesc = document.createElement('p');
    itemDesc.innerHTML = description;

    let image = document.createElement("img");
    image.src=imageURL;
    image.classList.add("menuImage");
    
    nameAndImage.append(itemName,image);
    container.append(nameAndImage,itemDesc);
    content.append(container);
    console.log("loadMenu");
}

function createMenuPage(){
    
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
    createMenuItem("noface","This is no face","/restaurantPage/images/image01.jpg");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7VUN4QzdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0Y7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEIsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9sb2FkSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhZGRUaXRsZSAoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVUZXh0LmlubmVySFRNTD0oXCJUaGUgQmF0aGhvdXNlIFJlc3RhdXJhbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGREZXNjcmlwdGlvbigpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUw9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpe1xyXG4gICAgYWRkVGl0bGUoKTtcclxuICAgIGFkZERlc2NyaXB0aW9uKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVQYWdlO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLGRlc2NyaXB0aW9uLGltYWdlVVJMKXtcclxuICAgIFxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xyXG5cclxuICAgIGxldCBuYW1lQW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVBbmRJbWFnZS5jbGFzc0xpc3QuYWRkKFwibmFtZUFuZEltYWdlXCIpO1xyXG5cclxuICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBpdGVtTmFtZS5pbm5lckhUTUw9bmFtZTtcclxuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbU5hbWVcIik7XHJcblxyXG4gICAgbGV0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbURlc2MuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLnNyYz1pbWFnZVVSTDtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51SW1hZ2VcIik7XHJcbiAgICBcclxuICAgIG5hbWVBbmRJbWFnZS5hcHBlbmQoaXRlbU5hbWUsaW1hZ2UpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChuYW1lQW5kSW1hZ2UsaXRlbURlc2MpO1xyXG4gICAgY29udGVudC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZE1lbnVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCl7XHJcbiAgICBcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibm9mYWNlXCIsXCJUaGlzIGlzIG5vIGZhY2VcIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvaW1hZ2UwMS5qcGdcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm5vZmFjZVwiLFwiVGhpcyBpcyBubyBmYWNlXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2ltYWdlMDEuanBnXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJub2ZhY2VcIixcIlRoaXMgaXMgbm8gZmFjZVwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9pbWFnZTAxLmpwZ1wiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibm9mYWNlXCIsXCJUaGlzIGlzIG5vIGZhY2VcIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvaW1hZ2UwMS5qcGdcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm5vZmFjZVwiLFwiVGhpcyBpcyBubyBmYWNlXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2ltYWdlMDEuanBnXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJub2ZhY2VcIixcIlRoaXMgaXMgbm8gZmFjZVwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9pbWFnZTAxLmpwZ1wiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibm9mYWNlXCIsXCJUaGlzIGlzIG5vIGZhY2VcIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvaW1hZ2UwMS5qcGdcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm5vZmFjZVwiLFwiVGhpcyBpcyBubyBmYWNlXCIsXCIvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2ltYWdlMDEuanBnXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJub2ZhY2VcIixcIlRoaXMgaXMgbm8gZmFjZVwiLFwiL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9pbWFnZTAxLmpwZ1wiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibm9mYWNlXCIsXCJUaGlzIGlzIG5vIGZhY2VcIixcIi9yZXN0YXVyYW50UGFnZS9pbWFnZXMvaW1hZ2UwMS5qcGdcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tICcuL2xvYWRIb21lUGFnZSc7XHJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tICcuL2xvYWRNZW51JztcclxuZnVuY3Rpb24gY2xlYXJCb3goZWxlbWVudElEKVxyXG57XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKG5hbWUsIGRvbUVsZW1lbnQpe1xyXG4gICAgbGV0IGRvbT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21FbGVtZW50KTtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJCVE5cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQ9bmFtZTtcclxuICAgIGRvbS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmNvbnN0IGFkZE5hdkJ1dHRvbnMgPSAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkSG9tZVBhZ2UuanNcIilcclxuXHJcbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcIkhvbWVcIixcIm5hdlwiKTtcclxuICAgIGhvbWVCdXR0b24uaWQ9XCJob21lQnV0dG9uXCI7XHJcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcIk1lbnVcIixcIm5hdlwiKTtcclxuICAgIG1lbnVCdXR0b24uaWQ9XCJtZW51QnV0dG9uXCI7XHJcbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcIkNvbnRhY3RcIixcIm5hdlwiKTtcclxuICAgIGNvbnRhY3RCdXR0b24uaWQ9XCJjb250YWN0QnV0dG9uXCI7XHJcbn07XHJcblxyXG5hZGROYXZCdXR0b25zKCk7XHJcbmxvYWRIb21lUGFnZSgpO1xyXG5cclxubGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVCdXR0b25cIik7XHJcblxyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBjbGVhckJveChcImNvbnRlbnRcIik7XHJcbiAgICBsb2FkSG9tZVBhZ2UoKTtcclxufSlcclxuXHJcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QnV0dG9uXCIpO1xyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBjbGVhckJveChcImNvbnRlbnRcIik7XHJcbiAgICBjcmVhdGVNZW51UGFnZSgpO1xyXG59KVxyXG5jb25zb2xlLmxvZyhcIj9JREtcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==