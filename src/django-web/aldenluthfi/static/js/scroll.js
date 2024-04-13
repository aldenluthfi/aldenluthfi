var text_x = -1610
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
    document.querySelector('.title').addEventListener('mouseover', function (e) {
        oldMouseX = e.clientX
    })
}

function marquee() {
    var text = document.querySelector('.sliding')

    if (deltaX > 30 || deltaX < -30) {
        slideSpeed = Math.min(Math.max(slideSpeed + (deltaX - slideSpeed) * 0.1, -25), 15)
    } else {
        slideSpeed = slideSpeed * 0.95
    }

    text_x = (getTranslateX(text) - slideSpeed - 3)

    if (text_x < -1610) {
        text_x += 3227
    } else if (text_x > 1617) {
        text_x -= 3227
    }

    deltaX = mouseX - oldMouseX
    oldMouseX = mouseX

    text.style.transform = `translate(${text_x}px, 0px) skewX(${Math.max(Math.min(slideSpeed + (deltaX - slideSpeed) * 0.1, 6), -8).toFixed(1)}deg)`
    window.requestAnimationFrame(marquee)
}

marquee()

document.addEventListener("htmx:afterRequest", function (e) {
    document.querySelector('.title').addEventListener('mousemove', function (e) {
        mouseX = e.clientX
    })
    document.querySelector('.title').addEventListener('mouseover', function (e) {
        oldMouseX = e.clientX
    })
})

