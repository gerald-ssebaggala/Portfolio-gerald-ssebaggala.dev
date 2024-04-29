const navToggle = document.querySelector(".nav--toggle");
const navLinks = document.querySelectorAll(".nav--link");
const openCV = document.querySelector(".cv");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("open-nav");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("open-nav");
    })
});


openCV.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("../assets/resume.pdf", '_blank');
});