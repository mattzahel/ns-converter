import {decResult, binResult, octResult} from "./handlers";

function hexToDec(val) {
  let n = val;
  return parseInt(n, 16);
}

function hexToBin(val) {
  let n = hexToDec(val);
  return n.toString(2);
}

function hexToOct(val) {
  let n = hexToDec(val);
  return n.toString(8);
}

export function convertFromHex() {
  let val = document.getElementById("numVal").value;
  decResult.textContent = hexToDec(val);
  binResult.textContent = hexToBin(val);
  octResult.textContent = hexToOct(val);
}