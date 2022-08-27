const 입력 = prompt("숫자를 입력해 주세요.").split("").reverse();
let 결괏값 = "";

for (let i = 0; i < 입력.length; i++) {
  결괏값 += 입력[i];
}

console.log(결괏값);
