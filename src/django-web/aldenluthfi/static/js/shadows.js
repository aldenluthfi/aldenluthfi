document.querySelector(".burger").addEventListener("mouseover", function () {
    document.querySelector(".sidebar").classList.remove("shadow-glow-xl");
    document.querySelector(".sidebar").classList.remove("shadow-xl");
    if (localStorage.getItem("theme").includes("dark")) {
        document.querySelector(".sidebar").classList.add("shadow-glow-xl");
    } else {
        document.querySelector(".sidebar").classList.add("shadow-xl");
    }
});

document.querySelectorAll(".photo").forEach(function (button) {
    button.classList.remove("hover:shadow-glow-xl");
    button.classList.remove("hover:shadow-xl");
    if (localStorage.getItem("theme").includes("dark")) {
        button.classList.add("hover:shadow-glow-xl");
    } else {
        button.classList.add("hover:shadow-xl");
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

    document.querySelectorAll(".photo").forEach(function (button) {
        button.classList.remove("hover:shadow-glow-xl");
        button.classList.remove("hover:shadow-xl");
        if (localStorage.getItem("theme").includes("dark")) {
            button.classList.add("hover:shadow-glow-xl");
        } else {
            button.classList.add("hover:shadow-xl");
        }
    });

    if (window.scrollY > 0) {
        document.querySelector("header").classList.remove("drop-shadow-glow-md");
        document.querySelector("header").classList.remove("drop-shadow-md");
        if (localStorage.getItem("theme").includes("dark")) {
            document.querySelector("header").classList.add("drop-shadow-glow-md");
        } else {
            document.querySelector("header").classList.add("drop-shadow-md");
        }
    } else {
        document.querySelector("header").classList.remove("drop-shadow-glow-md");
        document.querySelector("header").classList.remove("drop-shadow-md");
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        document.querySelector("header").classList.remove("drop-shadow-glow-md");
        document.querySelector("header").classList.remove("drop-shadow-md");
        if (localStorage.getItem("theme").includes("dark")) {
            document.querySelector("header").classList.add("drop-shadow-glow-md");
        } else {
            document.querySelector("header").classList.add("drop-shadow-md");
        }
    } else {
        document.querySelector("header").classList.remove("drop-shadow-glow-md");
        document.querySelector("header").classList.remove("drop-shadow-md");
    }
});