/**
 * var、let与const
 */

function test() {
  var foo = 'outer'

  if (true) {
    var foo = 'inner'
    console.log(foo)
  }

  console.log(foo)
}

// test()

function test2() {
  var foo = 1
  var foo = 2
  console.log(foo)
}

// test2()


function test3() {
  var foo = 1

  if (true) {
    foo = 2
  }

  console.log(foo)
}

// test3()