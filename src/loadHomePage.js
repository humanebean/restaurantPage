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
export default loadHomePage;
