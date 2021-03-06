import {decResult, binResult, hexResult} from "./handlers";

function octToDec(val) {
  let n = val;
  return parseInt(n, 8);
}

function octToBin(val) {
  let n = octToDec(val);
  return n.toString(2);
}

function octToHex(val) {
  let n = octToDec(val);
  return n.toString(16).toUpperCase();
}

export function convertFromOct() {
  let val = document.getElementById("numVal").value;
  decResult.textContent = octToDec(val);
  binResult.textContent = octToBin(val);
  hexResult.textContent = octToHex(val);
}