const 입력 = prompt("문자를 입력해 주세요.");

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
    // console.log(`i : ${i}`);
    // console.log(`revStr : ${revStr}`);
  }
  return revStr;
}

console.log(reverse(입력));
