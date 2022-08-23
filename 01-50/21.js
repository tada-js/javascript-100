const arr = [1, 2, 2, 3, 4, 5, 5, 5];
let setArr = new Set(arr);

setArr.add("hello world"); // add는 추가
setArr.delete("hello world"); // delete는 삭제
console.log(setArr.has(5)); // has는 해당 값이 있는지 없는지 boolean으로 나타냄
console.log(arr);
console.log(setArr);

// 1.  var x = {1, 2, 3, 5, 6, 7}; => X
// 2.  var x = {}; => X
// 3.  var x = new Set('javascript'); => O
// 4.  var x = new Set(range(5)); => X
// 5.  var x = new Set(); => O

// set : 중복되지 않는 데이터를 저장하는 데이터 구조.
