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
    
    createMenuItem("Aji Fry","Aji Fry is a traditional Japanese home-cooking dish. Butterflied horse mackerel is coated in breadcrumbs and deep-fried to a perfect golden colour. The method of butterflying the fish is unique as it opens the fish from the dorsal side instead of the belly side.","https://github.com/humanebean/restaurantPage/raw/main/images/ajiFry.avif","$12.99");
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

export default createMenuPage;