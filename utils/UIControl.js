class UIControl {
    static isOver({ element, mouse }) {
        element = element.current
        if (!element) {
            return false
        }
        let documentRect = document.body.getBoundingClientRect(),
            elementRect = element.getBoundingClientRect()

        let coordinates = {
            top: elementRect.top - documentRect.top,
            left: elementRect.left - documentRect.left
        }
        if (mouse.clientY >= coordinates.top &&
            mouse.clientY <= coordinates.top + elementRect.height &&
            mouse.clientX >= coordinates.left
            && mouse.clientX <= coordinates.left + elementRect.width) {
            return true
        }
        return false
    }

    static validURL(url) {
        let parts = url.split("/")
        let splited = ""
        for (let i = 0; i < parts.length; i++) {
            let words = parts[i].split(" ")
            for (let l = 0; l < words.length; l++) {
                splited += words[l]
                if (words[l + 1]) {
                    splited += "-"
                }
            }
            if (parts[i + 1]) {
                splited += "/"
            }
        }
        return splited
    }

}

export default UIControl