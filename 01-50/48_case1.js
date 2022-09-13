const str = "AAABBBcccddd";
let result = "";

for (let element of str) {
  element === element.toUpperCase()
    ? (result += element.toLowerCase())
    : (result += element.toUpperCase());
}

console.log(result);
