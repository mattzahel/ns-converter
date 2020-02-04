import {convertFromDec} from "./dec";
import {val} from "./handlers";
import {numSys, toggleResults} from "./toggleResults";

const convertBtn = document
  .querySelector("#convertBtn")
  .addEventListener("click", convert);

function convert(e) {
  if (val != "") {
    switch(numSys.value) {
      case "dec": convertFromDec(val); break;
      case "bin": convertFromBin(val); break;
      case "oct": convertFromOct(val); break;
      case "hex": convertFromHex(val); break;
    }
  }
  e.preventDefault();
};