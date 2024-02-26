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

export default createMenuPage;