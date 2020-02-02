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
  // console.log(`Binary: ${binary}`);
  return binary;
}

function decToOct(value) {
  let n = value;
  let octal = [];

  for (let i = 0; n > 0; i++) {
    octal[i] = Math.floor(n % 8);
    n = Math.floor(n / 8);
  }
  octal = octal
    .reverse()
    .map(String)
    .join("");
  // console.log(`Octal: ${octal}`);
  return octal;
}


function decToHex(value) {
  let n = value;
  let hexadecimal = [];

  for (let i = 0; n > 0; i++) {
    hexadecimal[i] = Math.floor(n % 16);
    n = Math.floor(n / 16);
  }
  hexadecimal = hexadecimal
    .reverse()
    .map(String)
    .join("");
  // console.log(`Hexadecimal: ${hexadecimal}`);
  return hexadecimal;
}