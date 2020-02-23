import {decResult, binResult, hexResult} from "./handlers";

function octToDec(val) {
  let n = val;
  console.log(parseInt(n, 8))
  return parseInt(n, 8);
}

function octToBin(val) {
  let n = octToDec(val);
  console.log(n.toString(2))
  return n.toString(2);
}

function octToHex(val) {
  let n = octToDec(val);
  console.log(n.toString(16).toUpperCase())
  return n.toString(16).toUpperCase();
}

export function convertFromOct() {
  let val = document.getElementById("numVal").value;
  decResult.textContent = octToDec(val);
  binResult.textContent = octToBin(val);
  hexResult.textContent = octToHex(val);
}