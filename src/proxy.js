const person = {
  name: 'xiaoming',
  age: 20
}

function render(person) {
  const { name, age } = person
  console.log(`My name is ${name}, ${age} years old`)
}

const proxy = new Proxy(person, {
  set(target, key, value, receiver) {
    target[key] = value
    render(target)
    return true
  }
})

render(proxy)

proxy.age = 21
proxy.age = 22
proxy.age = 23