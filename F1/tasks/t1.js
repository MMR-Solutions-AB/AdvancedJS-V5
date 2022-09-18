/* -------------------------------------------- */

function findUserById(arr, id) {
  const user = arr.find(function(user){
    return user.id === id;
  });
  return user;
}

/* -------------------------------------------- */

function changeAge(arr, id) {
  const newArr = arr.map(function(user){
    if (user.id === id) {
      return { ...user, age: 31 };
    } else {
      return user;
    }
  });
  return newArr;
}

/* -------------------------------------------- */ 

function changeAgeSpicy(arr, id, updatedAge) {
  return arr.map((user) => {
    return user.id === id ? { ...user, age: updatedAge } : user;
  });
}

/* -------------------------------------------- */
