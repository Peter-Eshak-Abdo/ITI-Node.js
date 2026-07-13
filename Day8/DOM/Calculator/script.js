let first = null;
let op = null;
let secondStr = "";

function getAns() {
  return document.getElementById("Answer");
}

function setAns(val) {
  const el = getAns();
  el.value = val;
}

window.EnterClear = function EnterClear() {
  first = null;
  op = null;
  secondStr = "";
  setAns("");
};

window.EnterNumber = function EnterNumber(value) {
  if (op === null) {
    first = Number(value);
    secondStr = "";
    setAns(String(first));
  } else {
    secondStr += value;
    setAns(secondStr);
  }
};

window.EnterOperator = function EnterOperator(value) {
  op = value;
};

window.EnterEqual = function EnterEqual() {
  const a = first;
  const b = Number(secondStr);

  let result = "";
  
  if (op === "+") result = a + b;
  else if (op === "-") result = a - b;
  else if (op === "*") result = a * b;
  else if (op === "/") result = b === 0 ? "" : a / b;

  setAns(String(result));

  first = Number(result);
  op = null;
  secondStr = "";
};
