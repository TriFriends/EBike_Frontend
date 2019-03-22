export function isChrome() {
    return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
}