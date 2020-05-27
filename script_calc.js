'use strict'
 
//Calculator - to modify closer to real conditions and for example package tour options
let persons = document.querySelectorAll('.counter-block-input')[0],
restDays = document.querySelectorAll('.counter-block-input')[1],
place = document.getElementById('select'),
totalValue = document.getElementById('total'),
personsSum = 0,
daysSum = 0,
total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum+personsSum)*4000 // random formula, 

    if(restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
}); 

restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum+personsSum)*4000 // random formula, 

    if(persons.value == '' || restDays.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

place.addEventListener('change', function() {
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value; // Different accommodation options use coef.value accessable in html
    }

});