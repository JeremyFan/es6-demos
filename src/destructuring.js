// 解构赋值

let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

function swape() {
  [a, b] = [b, a]
}

swape()
console.log(a, b, c)

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
}

const { foo, bar, baz } = obj
console.log(foo, bar, baz)

const [e, f, g] = 'msg'
console.log(e, f, g)