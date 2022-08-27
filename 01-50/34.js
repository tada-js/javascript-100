const 입력 = prompt("키를 입력해 주세요.");
let 정렬 = "";

정렬 = 입력
  .split(" ")
  .sort(function (a, b) {
    return a - b;
  })
  .join(" ");

if (입력 === 정렬) {
  console.log("YES");
}
if (입력 !== 정렬) {
  console.log("NO");
}

// arr.sort([compareFunction])
// compareFunction Optional :정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬된다.
// 정렬한 배열. 원 배열이 정렬되는 것에 유의. 복사본이 만들어지는 것이 아님.
