// let num = 42;
// let firstName = 'Vladilen';
// const isProgrammer = true;

// firstName = 'Max';
// isProgrammer = false; error

// firstName = 'Max';

// alert(firstName);
// console.log('Test:', num, firstName, isProgrammer);

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num % 10)
// console.log(num ** 10)
// console.log(num % 2)
// console.log(num % 3)
// console.log(num % 4)
//
// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);

// let num3 = (num + 10 * 2) / (5 - 1);
// console.log(num, num3);

// const fullName = firstName + ' Minin';
// const fullName = firstName + ' ' + 'Minin';


const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multipliedBtn = document.getElementById('multiplied');
const dividedBtn = document.getElementById('divided');

const submitBtn = document.getElementById('submit');
let action = '+';

// console.log(resultElement.textContent);
// resultElement.textContent = (42 - 2) / num;

// console.log(typeof sum)

// submitBtn.onclick = function () {
//     const sum = Number(input1.value) + Number(input2.value);
//     resultElement.textContent = sum;
//     console.log('Hello Click!')
// }

plus.onclick = function () {
    action = '+';
}

minus.onclick = function () {
    action = '-';
}

multiplied.onclick = function () {
    action = '*';
}

divided.onclick = function () {
    action = '/';
}


function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    if (actionSymbol === '+') {
        return num1 + num2;
    } else if (actionSymbol === '-') {
        return num1 - num2;
    } else if (actionSymbol === '*') {
        return num1 * num2;
    }
        // else if (actionSymbol === '/' && num2 == '0') { // num2 == '0' или num2 === 0
    //     return 'Деление на ноль невозможно';
    else if (actionSymbol === '/') {
        if (num2 === 0) {
            return 'Деление на ноль невозможно';
        }
        return num1 / num2;
    }

    //return actionSymbol === '+'? num1 + num2 : num1 - num2;  // в случае, если в калькуляторе тольео + и -
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);

    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value);
    //     printResult(sum);
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value);
    //     printResult(sum);
    // }
}
