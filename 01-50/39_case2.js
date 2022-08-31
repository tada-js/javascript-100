//1. 함수 사용
const 입력 = prompt("문장을 입력해 주세요.");

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(입력, "q", "e"));
