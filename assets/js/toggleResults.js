import {numSys} from "./handlers";

const toggleResults = () => {
  document.querySelector("#decBlock").style.display = "none";
  numSys.addEventListener("change", function() {
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