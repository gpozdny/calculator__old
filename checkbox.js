'use strict'

var checkbox = $('.checkbox'),
    price = $('.item__price'),
    totalElement = $('.total'),
    totalVal = 0;

checkbox.on('click', function() {
var currentCheckBox = $(this);
var curValText = currentCheckBox.first().parent().find("span").text();
var curVal = parseInt(curValText);
    if(currentCheckBox.is(":checked")){
        totalVal += curVal;
    } else {
        totalVal -= curVal;
    }
    fill();
});

function fill () {

    totalElement.text(totalVal);

}

fill();
