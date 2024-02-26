import loadHomePage from './loadHomePage';
import createMenuPage from './loadMenu';
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
loadHomePage();

let homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click",()=>{
    clearBox("content");
    loadHomePage();
})

let menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click",()=>{
    clearBox("content");
    createMenuPage();
})
console.log("?IDK");
