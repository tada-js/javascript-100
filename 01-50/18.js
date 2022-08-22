const 입력 = prompt("국어/수학/영어 점수를 입력하세요.").split(" ");
let result = 0;

for (let i = 0; i < 3; i++) {
  result += parseInt(입력[i], 10); // 10진수 형태의 숫자로 데이터 타입을 변환
  // parseInt(string, radix)
  // radix Optional : string의 진수를 나타내는 2부터 36까지의 정수. 기본 값이 10이 아님! Number 자료형이 아닌 경우 Number로 변환.
}

console.log(입력);
console.log(Math.floor(result / 3));
