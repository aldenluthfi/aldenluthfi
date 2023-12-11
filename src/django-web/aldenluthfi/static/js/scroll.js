
function scrollSmooth() {
    const scrollWrap = document.querySelectorAll(".momentum-scroll")
    const speed = 0.1

    var offset = 0

    function smoothScroll() {
        offset += (window.scrollY - offset) * speed;

        var scroll = "translateY(-" + offset + "px) translateZ(0)";
        scrollWrap.forEach(function (el) {
            el.style.transform = scroll;
        })

        callScroll = requestAnimationFrame(smoothScroll);
    }

    smoothScroll()

}

scrollSmooth()

document.addEventListener("htmx:afterRequest", function (e) { scrollSmooth() })