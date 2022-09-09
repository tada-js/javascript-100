const 현재시간 = new Date();
let 연도 = 현재시간.getTime();
연도 = Math.floor(연도 / (3600 * 24 * 365 * 1000)) + 1970;

console.log(연도);
