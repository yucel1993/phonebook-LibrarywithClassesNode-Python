fruits = [
  "apple",
  "elderberry",
  "elderberry",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "honeydew",
  "honeydew",
  "honeydew",
  "kiwi",
  "lemon",
];
const check = (a) => {
  myObj = {};

  for (let fruit of a) {
    if (!myObj[fruit]) myObj[fruit] = 1;
    else myObj[fruit] += 1;
  }

  let maxNum = 0;
  let targetFruit = "";
  for (let key in myObj) {
    if (myObj[key] > maxNum) {
      maxNum = myObj[key];
      targetFruit = key;
    } else {
      continue;
    }
  }
  return { targetFruit, maxNum };
};

console.log(check(fruits));
