const inputControlFontSize = document.getElementById('font-size-control'); 
const spanText = document.getElementById('text'); 
 
 
inputControlFontSize.addEventListener('input', () => {  
    const currentFontSize = inputControlFontSize.value + 'px'; 
    spanText.style.fontSize = currentFontSize; 
 
})