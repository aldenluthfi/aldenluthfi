var x = 0
var speed = Math.floor(document.documentElement.clientWidth / 500)

function marquee() {
    var text = document.querySelector('.sliding')

    x = x - speed

    if (x <= -Math.floor(0.25 * text.getBoundingClientRect().width)) {
        x = -x + speed
    }

    text.style.transform = `translateX(${x}px) skewX(0deg)`

    requestAnimationFrame(marquee)
}

marquee()

