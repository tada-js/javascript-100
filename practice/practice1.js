// 입력받은 값 모두 더하기

const 입력 = prompt("입력").split(" ");
let 결괏값 = 0;

for (let i = 0; i < 입력.length; i++) {
  결괏값 += parseInt(입력[i], 10);
}

console.log(결괏값);
