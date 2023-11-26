const cursorDot = document.getElementsByClassName("cursor")[0];

var mouseDown = 0;

window.addEventListener(
    "mousemove",
    function (e) {
        cursorDot.classList.remove('hidden')
        cursorDot.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
        }, { duration: 500, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
    }
)

window.addEventListener(
    "mousedown",
    function (e) {
        let classList = cursorDot.classList
        classList.remove('w-10')
        classList.remove('h-10')
        classList.remove('h-6')
        classList.remove('w-6')
        classList.remove('h-4')
        classList.remove('w-4')
        classList.remove('h-2')
        classList.remove('w-2')
        if (!(e.target.tagName == "A") && !(e.target.tagName == "BUTTON")) {
            classList.add('h-6')
            classList.add('w-6')
        } else {
            classList.add('h-2')
            classList.add('w-2')
        }
        mouseDown++;
    }
)

window.addEventListener(
    "mouseup",
    function (e) {
        let classList = cursorDot.classList
        classList.remove('w-10')
        classList.remove('h-10')
        classList.remove('h-6')
        classList.remove('w-6')
        classList.remove('h-4')
        classList.remove('w-4')
        classList.remove('h-2')
        classList.remove('w-2')
        if (!(e.target.tagName == "A") && !(e.target.tagName == "BUTTON")) {
            classList.add('w-10')
            classList.add('h-10')
        } else {
            classList.add('h-4')
            classList.add('w-4')
        }
        mouseDown--;
    }
)

function setClickable(target) {
    const clickables = target.querySelectorAll("a, button");
    clickables.forEach(clickable => {
        clickable.addEventListener(
            "mouseover",
            function (e) {
                let classList = cursorDot.classList
                classList.toggle('bg-transparent')
                classList.toggle('bg-accent-primary-500')
                classList.remove('w-10')
                classList.remove('h-10')
                classList.remove('h-6')
                classList.remove('w-6')
                classList.remove('h-4')
                classList.remove('w-4')
                classList.remove('h-2')
                classList.remove('w-2')
                if (mouseDown == 1) {
                    classList.add('h-2')
                    classList.add('w-2')
                } else {
                    classList.add('h-4')
                    classList.add('w-4')
                }
            }
        );
        clickable.addEventListener(
            "mouseleave",
            function (e) {
                let classList = cursorDot.classList
                classList.toggle('bg-transparent')
                classList.toggle('bg-accent-primary-500')
                classList.remove('w-10')
                classList.remove('h-10')
                classList.remove('h-6')
                classList.remove('w-6')
                classList.remove('h-4')
                classList.remove('w-4')
                classList.remove('h-2')
                classList.remove('w-2')
                if (mouseDown == 1) {
                    classList.toggle('w-6')
                    classList.toggle('h-6')
                } else {
                    classList.toggle('w-10')
                    classList.toggle('h-10')
                }
            }
        );
    })
}

setClickable(document)