document.querySelector(".burger").addEventListener("mouseover", function () {
    document.querySelector(".sidebar").classList.remove("shadow-glow-xl");
    document.querySelector(".sidebar").classList.remove("shadow-xl");
    if (localStorage.getItem("theme").includes("dark")) {
        document.querySelector(".sidebar").classList.add("shadow-glow-xl");
    } else {
        document.querySelector(".sidebar").classList.add("shadow-xl");
    }
});

document.querySelectorAll(".button").forEach(function (button) {
    button.classList.remove("hover:shadow-glow-lg");
    button.classList.remove("hover:shadow-lg");
    if (localStorage.getItem("theme").includes("dark")) {
        button.classList.add("hover:shadow-glow-lg");
    } else {
        button.classList.add("hover:shadow-lg");
    }
});

document.addEventListener("htmx:afterRequest", function (e) {
    document.querySelector(".burger").addEventListener("mouseover", function () {
        document.querySelector(".sidebar").classList.remove("shadow-glow-xl");
        document.querySelector(".sidebar").classList.remove("shadow-xl");
        if (localStorage.getItem("theme").includes("dark")) {
            document.querySelector(".sidebar").classList.add("shadow-glow-xl");
        } else {
            document.querySelector(".sidebar").classList.add("shadow-xl");
        }
    });

    document.querySelectorAll(".button").forEach(function (button) {
        button.classList.remove("hover:shadow-glow-lg");
        button.classList.remove("hover:shadow-lg");
        if (localStorage.getItem("theme").includes("dark")) {
            button.classList.add("hover:shadow-glow-lg");
        } else {
            button.classList.add("hover:shadow-lg");
        }
    });
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        document.querySelector("header").classList.remove("shadow-glow-md");
        document.querySelector("header").classList.remove("shadow-md");
        if (localStorage.getItem("theme").includes("dark")) {
            document.querySelector("header").classList.add("shadow-glow-md");
        } else {
            document.querySelector("header").classList.add("shadow-md");
        }
    } else {
        document.querySelector("header").classList.remove("shadow-glow-md");
        document.querySelector("header").classList.remove("shadow-md");
    }
});