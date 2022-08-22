const 입력 = prompt("숫자를 입력해 주세요.").split(" ");

const 몫 = Math.floor(parseInt(입력[0], 10) / parseInt(입력[1], 10));
const 나머지 = Math.floor(parseInt(입력[0], 10) % parseInt(입력[1], 10));

console.log(몫, 나머지);
