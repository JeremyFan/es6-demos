import 'babel-polyfill'
import co from 'co'

import { getArtist, getArtistSongs, getSongInfo } from './helper/api'
import view from './helper/view'


function* gen() {
  yield 1
  yield 2
  return 3
}

const one = gen()

function testGen() {
  console.log(one.next())
  console.log(one.next())
  console.log(one.next())
  console.log(one.next())
}
// testGen()



function* genGetSongs() {
  const artistInfo = yield getArtist()
  const songIds = yield getArtistSongs(artistInfo.id)
  const songs = yield getSongInfo(songIds)

  view.render(songs)
}


const req = genGetSongs()
const result = req.next()

result.value
  .then(response => {
    return req.next(response).value
  })
  .then(response => {
    return req.next(response).value
  })
  .then(response => {
    return req.next(response).value
  })



// co
function* coGetSongs() {
  const artistInfo = yield getArtist()
  const songIds = yield getArtistSongs(artistInfo.id)
  const songs = yield getSongInfo(songIds)

  // 展示数据
  view.render(songs)
}

co(coGetSongs)