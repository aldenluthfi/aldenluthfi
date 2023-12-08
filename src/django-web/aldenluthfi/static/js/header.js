const head = document.querySelector("header")
const navb = document.querySelector(".padding")

const shadowObserver = new IntersectionObserver(
    ([e]) => e.target.classList.toggle("shadow-md", e.intersectionRatio < 1),
    { threshold: [1] }
);
const paddingObserver = new IntersectionObserver(
    ([e]) => e.target.classList.toggle("pt-[1px]", e.intersectionRatio < 1),
    { threshold: [1] }
);

shadowObserver.observe(head);
paddingObserver.observe(navb);

document.addEventListener("htmx:afterRequest", function (e) {
    const head = document.querySelector("header")
    const navb = document.querySelector(".padding")
    shadowObserver.observe(head);
    paddingObserver.observe(navb);
})

document.addEventListener("htmx:beforeRequest", function (e) {
    const head = document.querySelector("header")
    const navb = document.querySelector(".padding")
    shadowObserver.unobserve(head);
    paddingObserver.unobserve(navb);
})