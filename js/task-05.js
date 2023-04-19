const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', onInput);

function onInput(event) {
    outputText.textContent = event.currentTarget.value || 'Anonymous';
    
}