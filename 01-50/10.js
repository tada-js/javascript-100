const n = 5;
let tree = '';

for (let i=1; i<=n; i++) {
  let star = '';

  // 공백 증가 for문
  for (let j=1; j<=n-i; j++) {
    star += ' ';
  }

  // 별 증가 for문
  for (let k=1; k<=2*i-1; k++) {
    star += '*';
  }
  
  tree += star + '\n';
}

console.log(tree);