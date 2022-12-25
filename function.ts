function addfunction(n1: number, n2: number) {
  return n1 + n2;
}

// function printResult(num: number) {
//   console.log("result: " + num);
// }

function printResultfunction(num: number): void {
  console.log("result: " + num);
} //값을 반환하지 않는 함수를 사용하는 경우에은 void를 표준으로 사용한다.

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = addfunction;
// combineValues = printResult;

console.log(combineValues(8, 8));

printResultfunction(addfunction(5, 12));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
