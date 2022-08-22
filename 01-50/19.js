const 입력 = prompt("숫자를 입력해 주세요.").split(" ");

console.log(Math.pow(parseInt(입력[0], 10), parseInt(입력[1], 10)));
// Math.pow(base, exponent) base^exponent처럼 base에 exponent를 제곱한 값을 반환
// base: 밑 값.
// exponent: 밑 을 제곱하기 위해 사용하는 지수.
