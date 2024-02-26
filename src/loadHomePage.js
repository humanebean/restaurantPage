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
export default loadHomePage;
