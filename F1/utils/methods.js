
function isOnline(arr) {
    let totalAmount = 0;
    arr.forEach((user) => {
      if (user.isOnline) {
        totalAmount += 1;
      }
    });
    return totalAmount;
  }

function setIsOnline(arr, id) {
    arr.map((user) => {
      if (user.id === id) {
        return { ...user, isOnline: true };
      } else {
        return;
      }
    });
  }

  function numberOfPeopleOnline(arr) {
    let totalAmount = 0;
    arr.forEach((user) => {
      if (user.isOnline) {
        totalAmount += 1;
      }
    });
    return totalAmount;
  }

  function findUserById(arr, id) {
    const user = arr.find((user) => {
      return user.id === id;
    });
    return user;
  }
  