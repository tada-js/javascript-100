let num = [];
let sum = 0;

for (let i = 0; i < 20; i++) {
  num[i] = i + 1;
}

num.forEach((n) => {
  if (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
});

// console.log(num);
console.log(sum);
