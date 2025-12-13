export const mySplit = (str) => {
  const result = [];
  let temp = '';

  for (let e of str) {
    if (e === ' ') {
      result.push(temp);
      temp = '';
    } else temp += e;
  }

  if (temp !== ' ') result.push(temp);

  return result;
};
