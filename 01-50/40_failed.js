// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

// **원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// **입력**
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// **출력**
// 2

const 입력 = ["5", "3", "1", "1", "1", "3"];
let 제한무게 = parseInt(입력[0], 10);
let 누적무게 = 0;
let n = parseInt(입력[1], 10);
let 탑승가능 = 0;

for (let i = 2; i < 입력.length; i++) {
  누적무게 += parseInt(입력[i], 10);

  if (제한무게 < 누적무게) {
    // 제한무게를 넘어 탑승 불가능
    탑승가능 = 입력.indexOf(입력[i]);
  }
  if (제한무게 > 누적무게) {
    // 제한무게를 넘지않아 탑승 가능
    탑승가능 = n;
  }
}

console.log(누적무게);
console.log(탑승가능);
