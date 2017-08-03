import 'babel-polyfill'
import { getArtist, getArtistSongs, getSongInfo } from './helper/api'
import view from './helper/view'

const getResult = async function() {
  const artistInfo = await getArtist()
  const songIds = await getArtistSongs(artistInfo.id)
  const songs = await getSongInfo(songIds)

  // 展示数据
  view.render(songs)
}

getResult()