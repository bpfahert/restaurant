import renderAbout from "./content";
import renderMenu from "./menu";

let body = document.querySelector("body");
let navBar = document.createElement("header")
navBar.setAttribute('id', 'navbar');

let aboutButton = document.createElement("button");
aboutButton.classList += "navbuttons";
aboutButton.type = "button";
aboutButton.textContent = "About";
aboutButton.setAttribute('id', 'aboutbtn');

let menuButton = document.createElement("button");
menuButton.classList += "navbuttons";
menuButton.type = "button";
menuButton.textContent = "Menu";
menuButton.setAttribute('id', 'menubtn');

let contactButton = document.createElement("button");
contactButton.classList += "navbuttons";
contactButton.type = "button";
contactButton.textContent = "Contact";
contactButton.setAttribute('id', 'contactbtn');

function renderNavbar () {
    body.insertBefore(navBar, content);
    navBar.appendChild(aboutButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton); 
}

aboutButton.addEventListener('click', function() {
    let menu = document.getElementById("menu");
    menu.remove();
    renderAbout();

});

menuButton.addEventListener('click', function() {
    let about = document.getElementById("about");
    about.remove();
    renderMenu();

});

renderNavbar();
renderMenu();