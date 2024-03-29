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

export default createContactPage;