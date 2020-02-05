import {numSys} from "./handlers";
import {toggleResults} from "./toggleResults";
import {convertFromDec} from "./dec";
import {convertFromBin} from "./bin";

document.getElementById("convertForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let numVal = document.getElementById("numVal").value;
  if(numVal!="") {
    convert(numVal);
  };
});


function convert(number) {
    switch(numSys.value) {
      case "dec": convertFromDec(number); break;
      case "bin": convertFromBin(number); break;
      case "oct": convertFromOct(number); break;
      case "hex": convertFromHex(number); break;
    }
};