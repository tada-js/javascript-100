const 입력 = prompt("문자를 입력해 주세요.");

function reverseFunc(str) {
  let result = str.split("");
  // console.log(result)
  result = result.reverse();
  // console.log(result)
  return result.join("");
}

console.log(reverseFunc(입력));
