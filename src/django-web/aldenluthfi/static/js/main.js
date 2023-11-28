const cursorDot = document.querySelector(".cursor");

const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");
const hue = document.querySelector(".hue-selector");

var mouseDown = 0;

dark.addEventListener(
    "mousedown",
    function (e) {
        current = document.documentElement.classList[0]
        hueClass = current + "-dark"
        document.documentElement.classList.remove(current);
        document.documentElement.classList.add(hueClass);
        dark.classList.add("hidden");
        light.classList.remove("hidden");
    }
)

light.addEventListener(
    "mousedown",
    function (e) {
        current = document.documentElement.classList[0]
        hueClass = current.replace("-dark", "")
        document.documentElement.classList.remove(current);
        document.documentElement.classList.add(hueClass);
        dark.classList.remove("hidden");
        light.classList.add("hidden");
    }
)

function setHue() {
    const hues = ["neutral", "rose", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]

    for (let i = 0; i < hues.length; i++) {
        let hueButton = document.querySelector(`.hue-${hues[i]}`)
        hueButton.addEventListener(
            "mousedown",
            function (e) {
                hueClass = `${hues[i]}`
                current = document.documentElement.classList[0]
                console.log(current)
                if (current.includes("-dark")) {
                    hueClass = `${hues[i]}-dark`
                }
                document.documentElement.classList.remove(current)
                document.documentElement.classList.add(hueClass)
            }
        );
    }
}

window.addEventListener(
    "mousemove",
    function (e) {
        if (document.body.clientWidth >= 1024) {
            cursorDot.classList.remove('hidden')
        }
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
        if (!(e.target.tagName == "A") && !(e.target.tagName == "BUTTON") && !(e.target.classList.contains("clickable"))) {
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
        if (!(e.target.tagName == "A") && !(e.target.tagName == "BUTTON") && !(e.target.classList.contains("clickable"))) {
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
    const clickables = target.querySelectorAll("a, button, .clickable");
    clickables.forEach(clickable => {
        clickable.addEventListener(
            "mouseover",
            function (e) {
                let classList = cursorDot.classList
                classList.remove('bg-transparent')
                classList.add('bg-accent')
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
                classList.add('bg-transparent')
                classList.remove('bg-accent')
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
setHue()