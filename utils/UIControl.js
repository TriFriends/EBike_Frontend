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
}

export default UIControl