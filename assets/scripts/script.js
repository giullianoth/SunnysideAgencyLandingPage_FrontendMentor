const mobileMenu = document.querySelector(".j_mobile_menu");
const mobileMenuIcon = document.querySelector(".j_mobile_menu_icon");

mobileMenuIcon.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("active")) {
        mobileMenu.classList.add("active");
        setTimeout(() => {
            mobileMenu.style.transform = "translateY(0)";
            mobileMenu.style.opacity = 1;
        }, 50);
    } else {
        mobileMenu.style.transform = "";
        mobileMenu.style.opacity = "";
        setTimeout(() => {
            mobileMenu.classList.remove("active");
        }, 300);
    }
})