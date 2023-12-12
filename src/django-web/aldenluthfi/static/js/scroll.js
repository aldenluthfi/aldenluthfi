function scrollSmooth() {
    const scrollWrap = document.querySelector("#scroll-content")
    const height = scrollWrap.getBoundingClientRect().height - 1
    const speed = 0.07

    var offset = 0

    document.body.style.height = Math.floor(height) + "px";

    function smoothScroll() {
        offset += (window.scrollY - offset) * speed;

        scrollWrap.style.transform = "translateY(-" + offset + "px)";

        callScroll = requestAnimationFrame(smoothScroll);
    }

    smoothScroll()

}


if (document.documentElement.clientWidth >= 1024) {
    window.onload = scrollSmooth
    document.addEventListener("htmx:afterRequest", function (e) { scrollSmooth() })
}