const 입력 = prompt("숫자를 입력하세요");
입력숫자변환 = Number(입력);

if (입력숫자변환 % 3 === 0) {
  console.log("짝");
} else {
  console.log(입력숫자변환);
}
