import {numSys, numVal} from "./handlers";
import {toggleResults} from "./toggleResults";
import {convertFromDec} from "./dec";
import {convertFromBin} from "./bin";
import {convertFromOct} from "./oct";
import {convertFromHex} from "./hex";


// const checkIfHex = (val) => {
//   const binRegex = /^[a-fA-F0-9]+$/g;
//   if(val.match(binRegex) == false) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkIfHex("2"));

document.getElementById("convertForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let numVal = document.getElementById("numVal").value;
  if(numVal!="") {
    convert(numVal);
  };
});

function convert(number) {
  document.querySelector("#results").classList.remove("results--hidden");
    switch(numSys.value) {
      case "dec": convertFromDec(number); break;
      case "bin": convertFromBin(number); break;
      case "oct": convertFromOct(number); break;
      case "hex": convertFromHex(number); break;
    }
};