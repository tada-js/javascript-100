// 두 개의 주사위를 던졌을때 두 눈의 합이 6이 되는 모든 경우의 수

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log(`${i}, ${j}`);
    }
  }
}
