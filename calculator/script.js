const operandArrayEl = document.getElementById("operandArray");
const currentOperandEl = document.getElementById("currentOperand");

currentOperandEl.innerHTML = "0";

let operandArray = [];
let currentOperand = "0";

const del = () => {
  currentOperand = currentOperand.slice(0, -1);
  updateView();
};

const clearAll = () => {
  operandArrayEl.innerHTML = "";
  currentOperandEl.innerHTML = "0";
  currentOperand = "0";
  operandArray = [];
};

const invertCurrentNumber = () => {
  currentOperand = parseFloat(currentOperand) * -1;
  updateView();
}

const addOperand = (operand) => {
  operandArray.push(currentOperand);
  currentOperand = "0";
  operandArray.push(operand);
  updateView();
};

const addNumber = (number) => {
  if (currentOperand === "0" || currentOperand === 0) {
    currentOperand = number.toString();
  } else {
    currentOperand += number.toString();
  }
  updateView();
};

const addDot = () => {
  if (currentOperand.indexOf(".") < 0) {
    currentOperand += ".";
  }
  updateView();
};

const checkResult = () => {
  operandArray.push(currentOperand);
  let queue = createQueue(operandArray);
  let copy = [...operandArray];
  recursiveCalc(0, copy, queue);
  if (!currentOperand.includes("Error")) {
    currentOperand = copy[0];
  }
  setResult();
};

const recursiveCalc = (acc = 0, array, queue) => {
  if (queue) {
    let localArr = [];
    let step = queue[0];
    let operand = array[step];
    let result = 0;
    let firstOperand = +array[step - 1];
    let secondOperand = +array[step + 1];
    switch (operand) {
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "√":
        if (secondOperand < 0 || secondOperand === 0) {
          result = 'err';
        } else {
          result = secondOperand ** (1 / firstOperand);
        }
        break;
      case "^":
        result = Math.pow(firstOperand, secondOperand);
        break;
    }
    if (result === 'err') {
      currentOperand = 'Error: negative sqrt number';
      return;
    }
    result = Math.floor(result * 1000) / 1000 ;
    array[step + 1] = result;
    array.splice(step - 1, 2);
    localArr = array;
    recursiveCalc(acc, localArr, createQueue(localArr));
  } else {
    return;
  }
};

const createQueue = (array, operandArray = ["^", "√", "*", "/", "+", "-"]) => {
  const queue = [];
  operandArray.forEach((operand) => {
    array.forEach((value, index) => {
      if (operand === value) {
        queue.push(index);
      }
    });
  });
  if (queue.length < 1) {
    return null;
  }
  return queue;
};

const updateView = () => {
  currentOperandEl.innerHTML = currentOperand;
  operandArrayEl.innerHTML = operandArray.join("");
};

const setResult = () => {
  operandArrayEl.innerHTML = "";
  currentOperandEl.innerHTML = currentOperand;
  operandArray = [];
};
