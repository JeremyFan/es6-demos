// 箭头函数
console.log('-----箭头函数-----')

const arr = [1, 2, 3, 4, 5]
const newArr = arr.map(i => i * i)
console.log(newArr)

const cat = {
  name: 'cat',
  sayHi: () => {
    console.log('hi')
  },
  getName: function() {
    return this.name
  }
}

cat.sayHi()
console.log(cat.getName())


// 对象属性的简写
console.log('-----对象属性的简写-----')
const name = 'dog'
const dog = {
  name,
  sayHi() {
    console.log('hi')
  },
  getName() {
    return this.name
  }
}

console.log(dog.getName())



// 函数参数增强
console.log('-----函数参数增强-----')
// rest参数
function sum(...args) {
  return args.reduce((i, sum) => i + sum, 0)
}
console.log(sum(1, 2, 3))

// 默认参数
function hi(msg='hi'){
  console.log(msg)
}

hi()
hi('hello')