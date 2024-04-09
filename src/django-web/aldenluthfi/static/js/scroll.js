var x = 0
var slideSpeed = (document.documentElement.clientWidth / 500) + 1

function getTranslateX(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return matrix.m41
}

function marquee() {
    var text = document.querySelector('.sliding')

    x = getTranslateX(text) - slideSpeed

    if (x <= -Math.floor(0.25 * text.getBoundingClientRect().width)) {
        x = -x + slideSpeed
    }

    text.style.transform = `translate(${x}px, 0px)`

    requestAnimationFrame(marquee)
}

marquee()

