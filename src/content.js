
function renderPage () {
    let body = document.querySelector("body");
    let content = document.getElementById("content");

    let navBar = document.createElement("header")
    navBar.setAttribute('id', 'navbar');

    let aboutButton = document.createElement("button");
    aboutButton.classList += "navbuttons";
    aboutButton.type = "button";
    aboutButton.textContent = "About";

    let menuButton = document.createElement("button");
    menuButton.classList += "navbuttons";
    menuButton.type = "button";
    menuButton.textContent = "Menu";

    let contactButton = document.createElement("button");
    contactButton.classList += "navbuttons";
    contactButton.type = "button";
    contactButton.textContent = "Contact";

    let about = document.createElement("div");
    about.setAttribute('id', 'about');

    let pizzaimg = document.createElement("img");
    pizzaimg.setAttribute('src', '');
    pizzaimg.setAttribute('alt', 'pizza');

    let textDiv = document.createElement("div");
    textDiv.className += "text";

    let aboutHeadline = document.createElement("h2");
    aboutHeadline.textContent = "Pizza is delicious, especially from our restaurant!";

    let aboutText = document.createElement("h4");
    aboutText.textContent = "Our pizza is the best pizza! Nobody else has pizza as tasty as ours! Pizza has never been so good as it is at our restaurant! Order pizza from us today! Our number is 55P-IZZA!";

    body.insertBefore(navBar, content);
    navBar.appendChild(aboutButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    content.appendChild(about);
    about.appendChild(pizzaimg);
    about.appendChild(textDiv);
    textDiv.appendChild(aboutHeadline);
    textDiv.appendChild(aboutText);


};

export default renderPage;