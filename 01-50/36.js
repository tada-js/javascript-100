const 입력 = "2";
let 결괏값 = "";

for (let i = 1; i <= 9; i++) {
  i === 9 ? (결괏값 += 입력 * i) : (결괏값 += 입력 * i + " ");
}

console.log(결괏값);
