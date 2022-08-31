const 입력 = prompt("문장을 입력해 주세요.").split("");

for (let i = 0; i < 입력.length; i++) {
  if (입력[i] === "q") {
    입력[i] = "e";
  }
}

console.log(입력.join(" "));
