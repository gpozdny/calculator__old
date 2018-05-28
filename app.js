'use strict'

var action = null,
    firstNum = $('#first-input'),
    secondNum = $('#second-input'),
    actionInput = $('#action'),
    equalsInput = $('#equal'),
    resultAll = $('#result'),
    tableau = $('.calc_number');

$("[data-action").on('click', function () {

    var localAction = $(this).data("action");

    if (resultAll.text().length) {
        firstNum.text(resultAll.text());
        useResult();
    }

    if (localAction == "-") {
        if (firstNum.text() == "") {
            firstNum.append(localAction);
        } else if (firstNum.text() != "-") {
            action = localAction;
            actionInput.text(localAction);
        }
    } else if (firstNum.text() != "") {
        action = localAction;
        actionInput.text(localAction);
    } else {
        alert("Pls type a number");
    }

});


$("[data-result]").on('click', function () {
    var leftNumber = firstNum.text();
    var rightNumber = secondNum.text();
    var answer;

    if (leftNumber && rightNumber && action) {
        answer = actions(parseFloat(leftNumber), parseFloat(rightNumber));
        equalsInput.text("=");
        resultAll.text(Math.round(answer * 100000) / 100000);
    } else {
        alert("Pls type a number");
    }

    if (rightNumber == "0" && action == "/") {

        clear();
        alert("Don't do this");

    }

});


$("[data-number]").on('click', function () {


    var currentEntry = $(this).data("number");
    var currentNum;


    if (resultAll.text().length) {
        clear();
    }
    if (action) {
        currentNum = secondNum;
    } else {
        currentNum = firstNum;
    }
    appendEntry(currentNum, currentEntry);

});

$("#reset").on('click', function () {
    clear();
});

function appendEntry(currentNum, currentEntry) {
    var numText = currentNum.text();

    if (currentEntry !== "." || numText.indexOf(".") == -1) {
        currentNum.append(currentEntry);
    }
}

function useResult() {
    secondNum.text("");
    equalsInput.text("");
    resultAll.text("");
}

function clear() {
    action = null;
    tableau.text("");
};

// actions

function actions(a, b) {
    var result;
    switch (action) {
        case "+":
            result = sum(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
}

function sum(a, b) {

    return a + b;

}

function divide(a, b) {

    return a / b;
}

function multiply(a, b) {

    return a * b;
}

function subtract(a, b) {

    return a - b;
}