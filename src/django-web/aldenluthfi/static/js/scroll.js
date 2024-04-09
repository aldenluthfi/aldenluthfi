var text_x = 0
var slideSpeed = Math.max(Math.floor(document.documentElement.clientWidth / 500), 1)

function getTranslateX(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return matrix.m41
}

function marquee() {
    var text = document.querySelector('.sliding')

    text_x = getTranslateX(text) - slideSpeed

    if (text_x <= -Math.floor(0.25 * text.getBoundingClientRect().width)) {
        text_x = -text_x
    }

    text.style.transform = `translate(${text_x}px, 0px)`

    requestAnimationFrame(marquee)
}

marquee()

