window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
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