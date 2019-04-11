var value = input.value;
var unitValue = unit.value;
var input = document.querySelector('#input');

input:addEventListener('input', convert);

function convert(n) {
var value = input.value;

// gram
document.querySelector('#gram').textContent = value * 453.592;
}
//kilogram
document.querySelector('#kilogram').textContent = value * 453.592 / 1000;

//pounds
document.querySelector('#ounce').textContent = value * 16;