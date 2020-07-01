const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
]

console.log(1, array);

let nextArray1 = array.concat({id: 4});
console.log(2, nextArray1);

let nextArray2 = nextArray1.filter(item => item.id !== 2);
console.log(3, nextArray2);

let nextArray3 = nextArray1.map(item => (item.id === 1 ? { ...item, value: false } : item))
console.log(4, nextArray3)

let nextArray4 = array.concat({id: 4}).filter(item => item.id !== 2).map(item => (item.id === 1 ? { ...item, value: false } : item))
console.log(5, nextArray4)

