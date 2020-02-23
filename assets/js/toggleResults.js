import {numSys, numVal} from "./handlers";

numVal.addEventListener("input", function() {
  document.querySelector("#results").classList.add("results--hidden");
});

const toggleResults = () => {
  document.querySelector("#decBlock").style.display = "none";
  numSys.addEventListener("change", function() {
    document.getElementById("numVal").value = '';
    document.querySelector("#results").classList.add("results--hidden");

    if(numSys.value === "hex") {
      numVal.type = "text"
    } else {
      numVal.type = "number"
    };

    Array.from(document.getElementsByClassName("results__block")).forEach(function (item) {
      if (item.id == `${numSys.value}Block`) item.style.display = "none";
      else item.style.display = "block";
    });
  });
};
toggleResults();

export {
  toggleResults
}