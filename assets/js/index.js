const convertBtn = document
  .querySelector("#convertBtn")
  .addEventListener("click", convert);

const system = document.querySelector("#system");
//Toggle Result Blocks
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
  }
  e.preventDefault();
};

function decToOct(value) {
  let n = value;
  let octal = [];
};

function decToBin(value) {
  let n = value;
  let binary = [];

  for (let i = 0; n > 0; i++) {
    binary[i] = Math.floor(n % 2);
    n = Math.floor(n / 2);
  }
  binary = binary
    .reverse()
    .map(String)
    .join("");
  console.log(`Binary: ${binary}`);
  return binary;
}