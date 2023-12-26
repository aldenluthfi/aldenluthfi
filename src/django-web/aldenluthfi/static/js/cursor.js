const cursorDot = document.querySelector(".cursor");
var mouseDown = 0;

window.addEventListener(
    "mousemove",
    function (e) {
        cursorDot.style.transform = `translate(-50%, -50%)`
        cursorDot.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
        }, { duration: 500, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
    }
)

window.addEventListener(
    "mousedown",
    function (e) {
        if (!(e.target.tagName == "A") && !(e.target.tagName == "BUTTON")) {
            cursorDot.animate({
                width: `1.5rem`,
                height: `1.5rem`,
            }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
        } else {
            cursorDot.animate({
                width: `0.5rem`,
                height: `0.5rem`,
            }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
        }
        this.document.activeElement.blur();
        mouseDown++;
    }
)

window.addEventListener(
    "mouseup",
    function (e) {
        if (!(e.target.tagName == "A") && !(e.target.tagName == "BUTTON")) {
            cursorDot.animate({
                width: `2.5rem`,
                height: `2.5rem`,
            }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
        } else {
            cursorDot.animate({
                width: `1rem`,
                height: `1rem`,
            }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
        }
        mouseDown--;
    }
)

function cursor() {
    const clickables = document.querySelectorAll("a, button");

    clickables.forEach(clickable => {
        clickable.addEventListener(
            "mouseover",
            function (e) {
                let classList = cursorDot.classList
                classList.remove('bg-transparent')
                classList.add('bg-accent')
                if (mouseDown == 1) {
                    cursorDot.animate({
                        width: `0.5rem`,
                        height: `0.5rem`,
                    }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
                } else {
                    cursorDot.animate({
                        width: `1rem`,
                        height: `1rem`,
                    }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
                }
            }
        )
        clickable.addEventListener(
            "mouseleave",
            function (e) {
                console.log(cursorDot)
                let classList = cursorDot.classList
                classList.add('bg-transparent')
                classList.remove('bg-accent')
                if (mouseDown == 1) {
                    cursorDot.animate({
                        width: `1.5rem`,
                        height: `1.5rem`,
                    }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
                } else {
                    cursorDot.animate({
                        width: `2.5rem`,
                        height: `2.5rem`,
                    }, { duration: 200, fill: "forwards", easing: "cubic-bezier(0.3, 0.2, 0.2, 1.4)" });
                }
            }
        )
    });
}

cursor()

document.addEventListener("htmx:afterRequest", function (e) { cursor() })