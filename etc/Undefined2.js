const arr = [1, 2, 3, 4, 5];
// const arr = [1];

const reducer = (acc, cur, idx, src) => {
  console.log(acc, cur, idx, src);
  // return `${acc}${cur}`;
  return acc + cur;
}

console.log(arr.reduce(reducer));