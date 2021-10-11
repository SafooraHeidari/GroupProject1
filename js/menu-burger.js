function openMenu(){
    let element = document.getElementById("navbar-main--mobile");
    let mainElement = document.getElementById("main--element")
    element.classList.add("menu-burger-open");
    element.classList.remove("menu-burger-close");
    // mainElement.classList.add("move-menu");
    // mainElement.classList.remove("move-back-menu");
}

function closeMenu(){
    let element = document.getElementById("navbar-main--mobile");
    let mainElement = document.getElementById("main--element")
    element.classList.remove("menu-burger-open");
    element.classList.add("menu-burger-close");
    // mainElement.classList.remove("move-menu");
    // mainElement.classList.add("move-back-menu");
}