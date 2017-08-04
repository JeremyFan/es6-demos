import 'babel-polyfill'

const s = 'hello'

for (let char of s) {
  console.log(char)
}


const arr = [1, 2, 3]

for (let i of arr) {
  console.log(i)
}


function* gen() {
  yield 'step 1'
  yield 'step 2'
  yield 'step 3'
}

const g = gen()

for (let step of g) {
  console.log(step)
}