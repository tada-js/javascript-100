const 이름입력 = prompt("이름을 입력해 주세요").split(" ");
const 점수입력 = prompt("점수를 입력해 주세요").split(" ");

const 성적 = {};

for (let i = 0; i < 이름입력.length; i++) {
  성적[이름입력[i]] = parseInt(점수입력[i], 10);
}

console.log(성적);
