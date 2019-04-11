// select input field
var input = document.querySelector('#input');
// select unit selections
var unit = document.querySelector('#input');
// catch user input event
input.addEventListener('input', convert);
unit.addEventListener('input', convert);
function convert() {
// get value of user input and units    
var value = input.value;
var unitValue = unit.value;
var output = document.querySelector("#output");
// show output when there is a value
if(value !== '') {    
 // show output 
    output.style.display = 'block';
} else {
    output.style.display = 'none';
}
var card1 = document.querySelector('#card1');
var card2 = document.querySelector('#card2');
var card3 = document.querySelector('#card3');

function convertLbs(value) {
    card1.querySelector('h4').textContent='Grams:'
    card1.querySelector('h4').textContent='Kilograms:'
    card1.querySelector('h4').textContent='Ounces:'

    card1.querySelector('div').textContent=value * 453.592;
    card1.querySelector('div').textContent=value * 453.592 / 1000;
    card1.querySelector('div').textContent=value * 16;

    card1.querySelector('h4').textContent='Kilograms:'
    card1.querySelector('h4').textContent='Ounces:'
    card1.querySelector('h4').textContent='Lbs:'

    card1.querySelector('div').textContent=value * 1000;
    card1.querySelector('div').textContent=value * 0.035274;
    card1.querySelector('div').textContent=value * 0.00220462;
}
























