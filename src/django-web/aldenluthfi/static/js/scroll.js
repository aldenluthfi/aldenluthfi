var text_x = 0
var slideSpeed = 5

function getTranslateX(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return matrix.m41
}

var oldMouseX = 0
var mouseX = 0
var deltaX = 0
if (document.documentElement.clientWidth >= 1024) {
    window.addEventListener('mousemove', function (e) {
        mouseX = e.clientX
    })
}

function marquee() {
    var text = document.querySelector('.sliding')

    text_x = getTranslateX(text) - slideSpeed - 5
    slideSpeed = Math.max(Math.min(slideSpeed + (deltaX - slideSpeed) * 0.1, 15), -15)

    if (text_x <= -Math.floor(0.25 * text.getBoundingClientRect().width)) {
        text_x = -text_x + 5
    }

    deltaX = mouseX - oldMouseX
    oldMouseX = mouseX

    text.style.transform = `translate(${text_x}px, 0px) skewX(${Math.max(Math.min(slideSpeed, 8), -8)}deg)`
    window.requestAnimationFrame(marquee)
}

marquee()

