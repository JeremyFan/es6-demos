import { getArtist, getArtistSongs, getSongInfo } from './helper/api'

getArtist()
  .then(artistInfo => {
    const artistId = artistInfo.id
    return getArtistSongs(artistId)
  })
  .then(songIds => {
    return getSongInfo(songIds)
  })
  .then(songs => {
    // 展示数据
    console.log(songs)
  })