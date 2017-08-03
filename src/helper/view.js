import Table from 'cli-table'

function render(data) {
  let table = new Table({
    head: ['ID', 'Title'],
    colWidths: [10, 20],
  })

  data.forEach(song => {
    table.push([song.songId, song.title])
  })

  console.log(table.toString())
}

export default { render }