const 입력 = prompt("숫자를 입력해 주세요.");
let 결과 = 0;

for (let i = 0; i < 입력.length; i++) {
  결과 += parseInt(입력[i], 10);
}

console.log(결과);
