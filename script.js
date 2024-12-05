const sidebar = document.querySelector("#sidebar");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    sidebar.style.display = "block";
    sidebar.style.right = "0";
});

close.addEventListener("click", () => {
    sidebar.style.right = "-100%";
    sidebar.style.display = "none";
});