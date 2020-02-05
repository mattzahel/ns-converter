import {decResult, octResult, hexResult} from "./handlers";

function binToDec(val) {
  // var dec = 0;
  // var nums = val.split("").map(Number);
  // console.log(nums);
  // for(let i=0; i<=(nums.length-1); i++) {
  //   if(nums[i] === 1) {
  //     console.log(dec)
  //     dec+=Math.pow(2, nums.length-i-1)
  //   }
  // }
  // console.log("dec = ", dec)
}

export function convertFromBin() {
  let val = document.getElementById("numVal").value;
  binToDec(val);
}