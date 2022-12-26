type Combinable = number | string; //알리어스
type conversionDescriptor = "as-number" | "as-text";

function combine(
  input1: number | string,
  input2: number | string,
  // resultConversion: "as-number" | "as-text"
  resultConversion: conversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");

console.log(combinedAges);
const conbinedNames = combine("30", "26", "as-number");
console.log(conbinedNames);

const combinedStringAges = combine("max", "anna", "as-text");
console.log(combinedStringAges);
