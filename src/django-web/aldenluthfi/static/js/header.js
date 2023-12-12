window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        document.querySelector("header").classList.remove("shadow-glow");
        document.querySelector("header").classList.remove("shadow-md");
        if (localStorage.getItem("theme").includes("dark")) {
            document.querySelector("header").classList.add("shadow-glow");
        } else {
            document.querySelector("header").classList.add("shadow-md");
        }
    } else {
        document.querySelector("header").classList.remove("shadow-glow");
        document.querySelector("header").classList.remove("shadow-md");
    }
});