class Song {
  constructor(id, title) {
    this.songId = id
    this.title = title
  }

  play() {
    console.log('play song')
  }

  getTitle() {
    return this.title
  }
}

const s = new Song(1, '知足')
const s2 = new Song(2, '温柔')

console.log(s)
console.log(s2.getTitle())


class PaymentSong extends Song {
  constructor(id, title, price) {
    super(id, title)
    this.price = price
  }

  getPrice() {
    return this.price
  }
}

const s3 = new PaymentSong(3, '拥抱', '2.00')

console.log(s3)
console.log(s3.getTitle())
console.log(s3.getPrice())