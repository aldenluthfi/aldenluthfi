document.querySelector(".burger").addEventListener("mouseover", function () {
    document.querySelector(".sidebar").classList.remove("shadow-glow-xl");
    document.querySelector(".sidebar").classList.remove("shadow-xl");
    if (localStorage.getItem("theme").includes("dark")) {
        document.querySelector(".sidebar").classList.add("shadow-glow-xl");
    } else {
        document.querySelector(".sidebar").classList.add("shadow-xl");
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
})