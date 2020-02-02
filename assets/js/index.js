import {decToBin, decToOct, decToHex} from "./dec";

const convertBtn = document
  .querySelector("#convertBtn")
  .addEventListener("click", convert);

const system = document.querySelector("#system");

//Toggle Result Blocks
document.querySelector("#decBlock").style.display = "none";
system.addEventListener("change", function () {
  Array.from(document.getElementsByClassName("results__block")).forEach(function (item) {
    if (item.id == `${system.value}Block`) item.style.display = "none";
    else item.style.display = "block";
  });
});

function convert(e) {
  let val = document.querySelector("#value").value;
  var decResult = document.querySelector("#decResult");
  var binResult = document.querySelector("#binResult");
  var octResult = document.querySelector("#octResult");
  var hexResult = document.querySelector("#hexResult");

  if (val != "") {
    binResult.innerText = decToBin(val);
    octResult.innerText = decToOct(val);
    hexResult.innerText = decToHex(val);
  }
  e.preventDefault();
};