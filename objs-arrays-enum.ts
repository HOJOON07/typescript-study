// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string ]; //튜플  구조 이코드에는 딱 두개의 요소만 있는 두개의 타입만 입력해야한다.
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} // 0부터 시작

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// } 5부터 시작 5,6,7

// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = 100,
//   AUTHOR = 200,
// }

const person =
  // name: string;
  // age: number;
  // hobbies: string[];
  // role: [number, string ]; //튜플  구조 이코드에는 딱 두개의 요소만 있는 두개의 타입만 입력해야한다.
  {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    roletwo: Role.ADMIN,
  };

let favoriteActivities: string[];
favoriteActivities = ["sports", "string"];

//혼합된 배열이다?
let mixarray: any[];
mixarray = [1, "string", "sdsds"];

console.log(person.name);

for (const hoobby of person.hobbies) {
  console.log(hoobby.toUpperCase());
}

if (person.roletwo === Role.AUTHOR) {
  console.log("is author");
}
