let numbers = prompt("10개의 숫자를 입력하세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers[0]);
