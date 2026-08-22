const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
    });
});
/* ========================================
   SCHOOL LOADING SCREEN
========================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("school-loader");

    if (!loader) return;

    setTimeout(function () {

        loader.classList.add("loader-hidden");

    }, 1200);

});