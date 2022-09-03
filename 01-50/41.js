const 입력 = prompt('숫자를 입력하세요.');

function check_prime(입력) {
  for (let i=2; i<입력; i++) {
    const result = 입력 % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  if (입력 === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(입력);