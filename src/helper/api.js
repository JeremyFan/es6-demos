function getArtist() {

  console.log('[request] getArtist...')

  const artists = {
    id: 2517,
    name: '薛之谦'
  }

  return _api(artists)
}

function getArtistSongs(artistId) {
  console.log('[request] getArtistSongs...')

  if (!artistId) console.error('no artistId')

  return _api([1, 2, 3, 4, 5])
}

function getSongInfo(ids) {
  console.log('[request] getSongInfo...')

  if (!ids) console.error('no song ids')

  const songs = [
    { songId: 1, title: '演员' },
    { songId: 2, title: '绅士' },
    { songId: 3, title: '你还要我怎样' },
    { songId: 4, title: '刚刚好' },
    { songId: 5, title: '我害怕' },
  ]

  return _api(songs)
}

function _api(response) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })
}

export { getArtist, getArtistSongs, getSongInfo }