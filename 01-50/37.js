const 입력 = prompt("후보를 입력해 주세요.").split(" ");
let 결괏값 = {};
let 반장 = "";

for (let index in 입력) {
  let 후보 = 입력[index];
  결괏값[후보] =
    결괏값[후보] === undefined ? 1 : (결괏값[후보] = 결괏값[후보] + 1);
}

반장 = Object.keys(결괏값).reduce(function (a, b) {
  return 결괏값[a] > 결괏값[b] ? a : b;
});

// console.log(결괏값);
// console.log(반장);
console.log(`${반장}(이)가 총 ${결괏값[반장]}표로 반장이 되었습니다.`);
