function toggleMenu() {
    const menu = document.querySelector(".menu-list");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}