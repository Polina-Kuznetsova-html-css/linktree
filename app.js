const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
// перемещение на другой сайт
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Скопируйте текст: " + link)
    } catch (err) {
        console.error(err)
    }
}
shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))