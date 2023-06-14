// handle images attributes with JS
document.querySelectorAll('img')
.forEach(img => {
    img.draggable = false // avoid draggable
    img.title = img.alt // set title to all
    img.oncontextmenu = () => false // no context menu
})