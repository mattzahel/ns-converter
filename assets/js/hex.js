import {decResult, binResult, octResult} from "./handlers";

function hexToDec(val) {
  let n = val;
  console.log(parseInt(n, 8))
  return parseInt(n, 16);
}

function hexToBin(val) {
  let n = hexToDec(val);
  console.log(n.toString(2))
  return n.toString(2);
}

function hexToOct(val) {
  let n = hexToDec(val);
  console.log(n.toString(8));
  return n.toString(8);
}

export function convertFromHex() {
  let val = document.getElementById("numVal").value;
  decResult.textContent = hexToDec(val);
  binResult.textContent = hexToBin(val);
  octResult.textContent = hexToOct(val);
}