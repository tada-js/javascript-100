const 입력 = prompt("후보를 입력해 주세요.").split(" ");
let 결괏값 = {};
let 반장 = "";

for (let index in 입력) {
  // for in object에 배열을 사용하면 variable은 index 번호를 저장, 객체에 사용하면 key를 저장.
  let 후보 = 입력[index];
  결괏값[후보] =
    결괏값[후보] === undefined ? 1 : (결괏값[후보] = 결괏값[후보] + 1);
  // 결괏값 객체에 대괄호 표기법으로 프로퍼티를 추가
  // console.log(index)
}

반장 = Object.keys(결괏값).reduce((accumulator, currentValue) => {
  // accumulator: callback함수의 반환값을 누적
  // currentValue: 배열의 현재 요소
  return 결괏값[accumulator] > 결괏값[currentValue]
    ? accumulator
    : currentValue;
});

console.log(`${반장}(이)가 총 ${결괏값[반장]}표로 반장이 되었습니다.`);

/* 
for in 문
for (const variable in object) {
  statement
}
variable: 매번 반복마다 다른 속성이름(Value name)이 변수(variable)로 지정된다.
object: 반복작업을 수행할 객체로 열거형 속성을 가지고 있는 객체. 
*/

/*
Array.prototype.reduce()
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.
arr.reduce(callback[, initialValue])
  callback function
    다음 4가지의 인수를 가진다.
    accumulator - accumulator는 callback함수의 반환값을 누적
    currentValue - 배열의 현재 요소
    index(Optional) - 배열의 현재 요소의 인덱스
    array(Optional) - 호출한 배열
    callback함수의 반환 값은 accumulator에 할당되고 순회중 계속 누적되어 최종적으로 하나의 값을 반환
  initialValue(Optional)
    최초 callback함수 실행 시 accumulator 인수에 제공되는 값, 초기값을 제공하지 않을경우 배열의 첫 번째 요소를 사용하고, 빈 배열에서 초기값이 없을 경우 에러가 발생.
*/
