let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("에러 발생!!", 500);

//void 와 달리 never는 이와 달리 함수가 반환할 수 있는 타입닙니다.
