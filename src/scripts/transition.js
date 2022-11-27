async function getHTMLFragment(pathname) {
    const response = await fetch(`/fragment${pathname}`)
    return await response.text()
}

function updateTheDOMSomehow(html) {
    document.getElementById('content').innerHTML = html
}

navigateEvent.intercept({
    async handler() {
        const html = await getHTMLFragment(url.pathname)

        if (!document.createDocumentTransition) {
        updateTheDOMSomehow(html)
        return
        }

        const transition = document.createDocumentTransition()
        transition.start(() => updateTheDOMSomehow(html))
    },
})