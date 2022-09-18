/* -------------------------------------------- */

function filterByCity(arr, city) {
  const newArr = arr.filter((user) => {
    return user.age === city;
  });
  return newArr;
}

/* -------------------------------------------- */

function getPeopleOverSpecificAge(arr, age) {
  const newArr = arr.filter((user) => {
    return user.age < age;
  });
  return newArr;
}

/* -------------------------------------------- */
