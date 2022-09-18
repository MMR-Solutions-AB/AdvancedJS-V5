/* -------------------------------------------- */

const criteria = {
  age: 18,
  city: "Stockholm",
};

/* -------------------------------------------- */

function getTargetGroup(arr, criteria) {
  const { city, age } = criteria;

  const peopleInStockholm = arr.filter(function (user) {
    if (user.city === city) {
      return user;
    }
  });

  const inStockholmByAge = peopleInStockholm.filter(function (user) {
    if (user.age > age) {
      return user;
    }
  });

  const targeted = inStockholmByAge.map(function (user) {
    return { ...user, isTarget: true };
  });

  return targeted;
}

/* -------------------------------------------- */

function concatArray(oldArray, updatedArray) {
  let userIdList = [];
  updatedArray.forEach(function (user) {
    userIdList.push(user.id);
  });
  let notUpdated = [];
  oldArray.forEach(function (user, index) {
    if (user.id !== userIdList[index]) {
      newArray.push(user);
    }
  });
  const newArray = [...notUpdated, ...updatedArray];
  return newArray;
}
