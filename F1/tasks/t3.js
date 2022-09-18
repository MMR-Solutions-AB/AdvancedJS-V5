/* -------------------------------------------- */

function setTargetOnUser(arr) {
  arr.map((user) => {
    return { ...user, isTarget: true };
  });
}

/* -------------------------------------------- */
