const 행성 = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const 입력 = prompt("행성의 이름을 한글로 입력해 주세요.");

console.log(행성[입력]);
// 객체의 프로퍼티에 접근하는 방법은 .표기법과 []표기법을 사용하여 접근할 수 있다.
