document.querySelector(".burger").addEventListener("mouseover", function () {
    document.querySelector(".sidebar").classList.remove("shadow-glow");
    document.querySelector(".sidebar").classList.remove("shadow-md");
    if (localStorage.getItem("theme").includes("dark")) {
        document.querySelector(".sidebar").classList.add("shadow-glow");
    } else {
        document.querySelector(".sidebar").classList.add("shadow-md");
    }
});

document.addEventListener("htmx:afterRequest", function (e) {
    document.querySelector(".burger").addEventListener("mouseover", function () {
        document.querySelector(".sidebar").classList.remove("shadow-glow");
        document.querySelector(".sidebar").classList.remove("shadow-md");
        if (localStorage.getItem("theme").includes("dark")) {
            document.querySelector(".sidebar").classList.add("shadow-glow");
        } else {
            document.querySelector(".sidebar").classList.add("shadow-md");
        }
    });
})