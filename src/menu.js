
function renderMenu () {

    let content = document.getElementById("content");
    let menu = document.createElement("div");
    menu.setAttribute('id', 'menu');
    let menuItems = document.createElement("ul");
    menuItems.className += "menu";

//TODO make each li entry an object using an object creator

    let cheesePizza = document.createElement('li');
    let sausagePizza = document.createElement('li');
    let breadstick = document.createElement('li');
    cheesePizza.className += "menuItem";
    sausagePizza.className += "menuItem";
    breadstick.className += "menuItem";

    let cheeseTitle = document.createElement('div');
    cheeseTitle.className += "menuTitle";
    cheeseTitle.textContent = "Cheese Pizza!";
    let cheeseDescription = document.createElement('div');
    cheeseDescription.textContent = "The standard underrated classic. A pizza with sauce and cheese only.";
 
    let sausageTitle = document.createElement('div');
    sausageTitle.className += "menuTitle";
    sausageTitle.textContent = "Sausage Pizza!";
    let sausageDescription = document.createElement('div');
    sausageDescription.textContent = "One of the tastiest pizzas on earth! Sausage pizza is always the right choice!";

    let breadstickTitle = document.createElement('div');
    breadstickTitle.className += "menuTitle";
    breadstickTitle.textContent = "Breadsticks!";
    let breadstickDescription = document.createElement('div');
    breadstickDescription.textContent = "A tasty side that's perfect for sharing! Breadsticks dipped in olive oil and covered in garlic and parmesan cheese! A must-try!";

    content.appendChild(menu);
    menu.appendChild(menuItems);
    menuItems.appendChild(cheesePizza);
    menuItems.appendChild(sausagePizza);
    menuItems.appendChild(breadstick);
    cheesePizza.appendChild(cheeseTitle);
    cheesePizza.appendChild(cheeseDescription);
    sausagePizza.appendChild(sausageTitle);
    sausagePizza.appendChild(sausageDescription);
    breadstick.appendChild(breadstickTitle);
    breadstick.appendChild(breadstickDescription);
}


export default renderMenu;