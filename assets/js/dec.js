export function decToBin(value) {
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

export function decToOct(value) {
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

export function decToHex(value) {
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