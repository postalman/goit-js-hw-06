 let counterValue = 0;

 const decrementBtn = document.querySelector('[data-action="decrement"]');
 const incrementBtn = document.querySelector('[data-action="increment"]');
 const valueEl = document.getElementById('value');

 decrementBtn.addEventListener('click', onDecrement);
 incrementBtn.addEventListener('click', onIncrement);

 function onDecrement() {
    counterValue -= 1;
    updateValue();
 }

 function onIncrement() {
    counterValue += 1;
    updateValue();
 }

function updateValue() {
    valueEl.textContent = counterValue;
}
 