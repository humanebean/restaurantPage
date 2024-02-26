function createButton(name, domElement){
    let dom=document.getElementById(domElement);
    let button = document.createElement("button");
    button.textContent=name;
    dom.appendChild(button);
};

const addNavButtons = ()=>{
    console.log("loadHomePage.js")

    createButton("button0","nav");
    createButton("button1","nav");
    createButton("button2","nav");
    createButton("button3","nav");
    createButton("button4","nav");
};

function addTitle () {
    let title=document.getElementById("title");
    let titleText = document.createElement("div");
    titleText.innerHTML=("The Bathhouse Restaurant");
    title.appendChild(titleText);
};

function addDescription() {
    let content = document.getElementById("content");
    let description = document.createElement("p");
    description.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    content.appendChild(description);
}
function loadHomePage(){
    addNavButtons();
    addTitle();
    addDescription();
}
export default loadHomePage;
