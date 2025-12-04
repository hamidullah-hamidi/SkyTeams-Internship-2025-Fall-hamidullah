export const myIncludes = (arr, num) => {
  for (let el of arr) {
    if (el === num) return true;
  }

  return false;
};
