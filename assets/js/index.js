const system = document.querySelector("#system").value;
const convertBtn = document.querySelector('#convertBtn').addEventListener("click", convert);

function convert(e) {
  let val = document.querySelector('#value').value;
  var decResult = document.querySelector('#decResult');
  var binResult = document.querySelector('#binResult');
  var octResult = document.querySelector('#octResult');
  var hexResult = document.querySelector('#hexResult');


  if(val!=''){
    binResult.innerText = decToBin(val);
  }
  e.preventDefault();
}

function decToBin(value) {
  let n = value;
  let binary = [];
  
  for(let i=0; n>0; i++) {
    binary[i] = Math.floor(n%2);
    n=(Math.floor(n/2));
  }
  binary=binary.reverse().map(String).join("");
  console.log(`Binary: ${binary}`);
  return binary;
}


