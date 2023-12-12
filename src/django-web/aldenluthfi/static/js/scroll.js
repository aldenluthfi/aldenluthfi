function scrollSmooth() {
    const scrollWrap = document.querySelector("#scroll-content")
    const speed = 0.1

    var offset = 0

    function smoothScroll() {
        offset += (window.scrollY - offset) * speed;

        var scroll = "translateY(-" + offset + "px) translateZ(0)";
        scrollWrap.style.transform = scroll;

        callScroll = requestAnimationFrame(smoothScroll);
    }

    smoothScroll()

}

window.onload = scrollSmooth
document.addEventListener("htmx:afterRequest", function (e) { scrollSmooth() })

window.addEventListener('touchstart', function (e) {
    this.document.removeEventListener("htmx:afterRequest")
    window.onload = null
})