const buttons = document.querySelectorAll('.btn')

let firstValue = ''
let secondValue = ''
let operatorClicked
let operator
let result

buttons.forEach((btn) => {
    btn.addEventListener('click',()=>{
    
    if (btn.className==='btn' && operatorClicked !== true)  {
        firstValue= firstValue+btn.innerHTML
        changeDisplayValue(firstValue);
    }

    else if (btn.className==='btn operator') {
    operatorClicked = true
    operator = btn.innerHTML
    }

    else if (btn.className==='btn' && operatorClicked == true) {
        secondValue= secondValue+btn.innerHTML
        changeDisplayValue(secondValue)
        }

    else if (btn.className==='btn calculate') {
        calculation(firstValue,operator,secondValue)
    }

    else if (btn.className==='btn clear') {
        firstValue = ''
        secondValue = ''
        operatorClicked = false
        changeDisplayValue(0)
    }
    else if (btn.className==='btn delete') {
        if (operatorClicked !== true)  {
            firstValue= ''
            console.log('yo')
            changeDisplayValue(0);
        }

        else if (operatorClicked == true) {
            secondValue= ''
            console.log('ya')
            changeDisplayValue(0);
            }
    }
    })
})


function changeDisplayValue(displayedValued){
    document.getElementById('display').innerHTML = displayedValued
}


function calculation(firstValue,operator,secondValue) {
    switch (operator) {

        case '+':
        result = 0+parseFloat(firstValue) + parseFloat(secondValue)
        break 
        case '-':
        result = 0+parseFloat(firstValue) - parseFloat(secondValue)
        break
        case '/':
            result = 0+parseFloat(firstValue) / parseFloat(secondValue)
        break
        case 'x':
            result = 0+parseFloat(firstValue) * parseFloat(secondValue)
        break
    }

    changeDisplayValue(result)
    changeValues(result)
    
 }


function changeValues(result) {
    firstValue = result
    secondValue = ''
}
