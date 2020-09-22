const operandArrayEl = document.getElementById('operandArray');
const currentOperandEl = document.getElementById('currentOperand');

currentOperandEl.innerHTML = '0';

let operandArray = [];
let currentOperand = '0';

const del = () => {
  currentOperand = currentOperand.slice(0, -1);
  updateView();
}

const clearAll = () => {
  operandArrayEl.innerHTML = '';
  currentOperandEl.innerHTML = '0';
  currentOperand = '0';
  operandArray = [];
}

const addOperand = (operand) => {
  operandArray.push(currentOperand);
  currentOperand = '0';
  operandArray.push(operand);
  updateView();
}

const addNumber = (number) => {
  if (currentOperand === '0') {
    currentOperand = number.toString();
  } else {
    currentOperand += number.toString();
  }
  updateView();
}

const addDot = () => {
  if (currentOperand.indexOf('.') < 0) {
    currentOperand += '.';
  }
  updateView();
}

const checkResult = () => {
  operandArray.push(currentOperand);
  let queue = createQueue();
  let result = [];

  queue.forEach((step, index) => {
    let operator = operandArray[step];
    switch (operator) {
      case '+':
        result.push(`${operandArray[step-1] + operator + operandArray[step+1]}`);
        break;
      case '-':
        result.push(`${operandArray[step-1] + operator + operandArray[step+1]}`);
        break;
      case '*':
        result.push(`${operandArray[step-1] + operator + operandArray[step+1]}`);
        break;
      case '/':
        result.push(`${operandArray[step-1] + operator + operandArray[step+1]}`);
        break;
      default:
        break;
    }
  })
  // setResult();
  console.log(result);
}

const createQueue = () => {
  const defaultQueue = ['^', '√', '*', '/', '+', '-'];
  const queue = [];
  defaultQueue.forEach((operand) => {
    operandArray.forEach((value, index) => {
      if (operand === value) {
        queue.push(index);
      }
    })
  })
  return queue;
}

const updateView = () => {
  currentOperandEl.innerHTML = currentOperand;
  operandArrayEl.innerHTML = operandArray.join('');
}
