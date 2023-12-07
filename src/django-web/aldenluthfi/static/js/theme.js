const dark = document.querySelector(".moon")
const light = document.querySelector(".sun")
const modeToggle = document.querySelector(".mode-toggle")
const hue = document.querySelector(".hue-selector")

var modeToggleClicked = 0

let theme = localStorage.getItem("theme")

if (theme != null) {
    document.documentElement.classList.add(theme);
    if (theme.includes("-dark")) {
        dark.classList.add("hidden")
        light.classList.remove("hidden")
        document.querySelector(".neutral-icon").classList.add("fill-neutral-700")
        document.querySelector(".neutral-icon").classList.remove("fill-neutral-500")
    } else {
        dark.classList.remove("hidden")
        light.classList.add("hidden")
        document.querySelector(".neutral-icon").classList.remove("fill-neutral-700")
        document.querySelector(".neutral-icon").classList.add("fill-neutral-500")
    }
} else {
    document.documentElement.classList.add("neutral")
    localStorage.setItem("theme", "neutral")
    dark.classList.remove("hidden")
    light.classList.add("hidden")
}

document.documentElement.addEventListener(
    "click",
    function (e) {
        if (document.activeElement != modeToggle && document.activeElement != hue) {
            document.activeElement.blur()
        }
    }
)

document.documentElement.addEventListener(
    "mouseover",
    function (e) {
        if (document.documentElement.clientWidth >= 1024) {
            document.activeElement.blur()
        }
    }
)

modeToggle.addEventListener(
    "mousedown",
    function (e) {
        if (document.documentElement.clientWidth >= 1024 || modeToggleClicked == 1) {
            current = document.documentElement.classList[document.documentElement.classList.length - 1]
            if (current.includes("-dark")) {
                hueClass = current.replace("-dark", "")
                dark.classList.remove("hidden")
                light.classList.add("hidden")
                document.querySelector(".neutral-icon").classList.remove("fill-neutral-700")
                document.querySelector(".neutral-icon").classList.add("fill-neutral-500")
            } else {
                hueClass = current + "-dark"
                dark.classList.add("hidden")
                light.classList.remove("hidden")
                document.querySelector(".neutral-icon").classList.add("fill-neutral-700")
                document.querySelector(".neutral-icon").classList.remove("fill-neutral-500")
            }
            document.documentElement.classList.remove(current)
            document.documentElement.classList.add(hueClass)
            localStorage.setItem("theme", hueClass)
        }
    }
)

modeToggle.addEventListener(
    "mouseleave",
    function (e) {
        if (document.documentElement.clientWidth < 1024) {
            modeToggleClicked = 0
        }
    }
)

modeToggle.addEventListener(
    "mouseover",
    function (e) {
        if (document.documentElement.clientWidth < 1024) {
            modeToggleClicked = 1
        }
    }
)

const hues = ["neutral", "rose", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]

hues.forEach(hue => {
    let hueButton = document.querySelector(`.hue-${hue}`)
    hueButton.addEventListener(
        "mousedown",
        function (e) {
            hueClass = `${hue}`
            current = document.documentElement.classList[0]
            if (current.includes("-dark")) {
                hueClass = `${hue}-dark`
                if (!current.includes("neutral")) {
                    document.querySelector(".neutral-icon").classList.add("fill-neutral-700")
                    document.querySelector(".neutral-icon").classList.remove("fill-neutral-500")
                }
            } else {
                if (!current.includes("neutral")) {
                    document.querySelector(".neutral-icon").classList.remove("fill-neutral-700")
                    document.querySelector(".neutral-icon").classList.add("fill-neutral-500")
                }
            }
            document.documentElement.classList.remove(current)
            document.documentElement.classList.add(hueClass)
            localStorage.setItem("theme", hueClass);
        }
    )
})