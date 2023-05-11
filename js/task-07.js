const inputChange = document.querySelector('input#font-size-control')
const updateText = document.querySelector('span#text')

inputChange.addEventListener('change', elSize => {
    updateText.style.fontSize = `${elSize.target.value }px`
})