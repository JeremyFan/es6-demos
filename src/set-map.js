const set = new Set([1, 2, 2, 3, 4, 5, 5])

console.log(set)

set.delete(1)
set.add(6)

console.log(set)

const dom1 = { id: 'dom-1' }
const dom2 = { id: 'dom-2' }
const dom3 = { id: 'dom-3' }

const map = new Map([
  [dom1, '11111'],
  [dom2, '22222'],
  [dom3, '33333']
])

console.log(map)

map.delete(dom1)
const dom4 = { id: 'dom-4' }
map.set(dom4, '44444')

console.log(map)


set.clear()
map.clear()
console.log(set, map)