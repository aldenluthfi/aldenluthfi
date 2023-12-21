var x = 0
var speed = document.documentElement.clientWidth / 500

function getTranslateX(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return matrix.m41
}

function inOutQuad(n) {
    n *= 2;
    if (n < 1) return 0.5 * n * n;
    return - 0.5 * (--n * (n - 2) - 1);
};

function marquee() {
    var text = document.querySelector('.sliding')

    x = getTranslateX(text) - speed

    if (x <= -Math.floor(0.25 * text.getBoundingClientRect().width)) {
        x = -x + speed
    }

    text.style.transform = `translateX(${x}px) skewX(0deg)`

    requestAnimationFrame(marquee)
}

marquee()

