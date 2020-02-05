import {decResult, octResult, hexResult} from "./handlers";

function binToDec(val) {
  let n = val;
  return parseInt(n, 2);
}

function binToOct(val) {
  let n = binToDec(val);
  return n.toString(8);
}

function binToHex(val) {
  let n = binToDec(val);
  return n.toString(16).toUpperCase();
}

export function convertFromBin() {
  let val = document.getElementById("numVal").value;  decResult.textContent = binToDec(val);
  octResult.textContent = binToOct(val);
  hexResult.textContent = binToHex(val);
}