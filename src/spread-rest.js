// spread和rest

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log([arr1, arr2])
console.log([...arr1, ...arr2])

const [f, ...rest] = [1, 2, 3]
console.log(first, rest)