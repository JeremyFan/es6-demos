const s = Symbol()

console.log(s)

let obj = {}
obj[s] = 123
console.log(obj[s])

const EnumSongType = {
  Normal: Symbol(),
  Vip: Symbol(),
  Pay: Symbol()
}

const E = {
  Normal: 1,
  Vip: 2
}

function show(type) {
  switch (type) {
    case EnumSongType.Normal:
      console.log('a normal song.')
      break;

    case EnumSongType.Vip:
      console.log('a vip song.')
      break;

    case EnumSongType.Payment:
      console.log('a pay song.')
      break;
  }
}

show(EnumSongType.Vip)