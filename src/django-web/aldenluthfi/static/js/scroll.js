var text_x = 0
var slideSpeed = 3

function getTranslateX(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return matrix.m41
}

var oldMouseX = 0
var mouseX = 0
var deltaX = 0
if (document.documentElement.clientWidth >= 1024) {
    document.querySelector('.title').addEventListener('mousemove', function (e) {
        mouseX = e.clientX
    })
}

function marquee() {
    var text = document.querySelector('.sliding')

    text_x = getTranslateX(text) - slideSpeed - 3
    if (deltaX > 30 || deltaX < -30) {
        slideSpeed = Math.min(Math.max(slideSpeed + (deltaX - slideSpeed) * 0.1, -25), 15)
    } else {
        slideSpeed = slideSpeed * 0.95
    }

    if (text_x <= -Math.floor(0.25 * text.getBoundingClientRect().width) || text_x > Math.floor(0.25 * text.getBoundingClientRect().width)) {
        text_x = -text_x
    }

    deltaX = mouseX - oldMouseX
    oldMouseX = mouseX

    text.style.transform = `translate(${text_x}px, 0px) skewX(${Math.max(Math.min(slideSpeed + (deltaX - slideSpeed) * 0.1, 6), -8).toFixed(1)}deg)`
    text.style.filter = `blur(${Math.abs(slideSpeed / 20).toFixed(1)}px)`
    window.requestAnimationFrame(marquee)
}

marquee()

document.addEventListener("htmx:afterRequest", function (e) {
    if (document.documentElement.clientWidth >= 1024) {
        document.querySelector('.title').addEventListener('mousemove', function (e) {
            mouseX = e.clientX
        })
    }
})

