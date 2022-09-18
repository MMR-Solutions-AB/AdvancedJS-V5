/* ----- TEST DATA ----- */

const arrStrings = ["a", "b", "c", "d", "e", "f"];
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

/* ----- SIMPLE CALLBACK DEMO ----- */
function getData(callback) {
  let arrayV2 = [1, 2, 3, 4, 5, 6];
  callback(arrayV2);
}

getData((argumentData) => {
  console.log(argumentData);
});

/* ----- HOMEMADE FOREACH ----- */

function myForEach(arr, callback) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index]);
  }
}

function CallbackWithName(data) {
  if (data[0] === "a") {
    console.log(true);
  }
}

/* Alternative 1 */
myForEach(arrStrings, CallbackWithName);

/* Alternative 2 */
myForEach(arrStrings, function (data) {
  if (data[0] === "a") {
    console.log(true);
  }
});

/* ------- Tre callback syntax's ------- */
// 1
arr.forEach(CallbackWithName);
// 2
arr.forEach((data) => {});
// 3
arr.forEach(function () {});
