// const 월 = prompt("월을 입력해 주세요.");
// const 일 = prompt("일을 입력해 주세요.");
const 월 = "5";
const 일 = "24";

function solution(a, b) {
  const 요일 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const x = new Date(`2020-${a}-${b}`);
  return 요일[x.getDay()];
}
console.log(solution(월, 일));
