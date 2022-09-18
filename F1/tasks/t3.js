/* -------------------------------------------- */

function setTargetOnUser(arr) {
  arr.map(function (user) {
    return { ...user, isTarget: true };
  });
}

/* -------------------------------------------- */
