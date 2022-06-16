import bindings from "bindings"
const addon = bindings("electron-cpp-boilerplate")

window.addEventListener('DOMContentLoaded', () => {

    const replaceText = (selector, text) => {
        const element = document.querySelector(selector)
        if (element) element.innerText = text
    }

    replaceText("#js-greeting", "Hello, I'm JavaScript!")
    replaceText("#cpp-greeting", addon.helloCpp())

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})