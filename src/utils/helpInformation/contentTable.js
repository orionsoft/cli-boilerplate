import Table from 'cli-table2'
export default function(title, body) {
  const table = new Table({
    chars: {
      top: '',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      bottom: '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      left: '',
      'left-mid': '',
      mid: '',
      'mid-mid': '',
      right: '',
      'right-mid': '',
      middle: ' '
    },
    style: {'padding-left': 5, 'padding-right': 10}
  })

  table.push([], ...body)

  return `
  ${title}:
  ${table.toString()}`
}
