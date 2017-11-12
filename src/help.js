import Table from 'cli-table2'
export default function() {
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
  table.push([], ['foo', 'bar'], ['frobnicate', 'bar'], ['frobnicate', 'bar'])

  return `
  Orionsoft Cli-boilerplate

  Usage:

    $ orionsoft [command] --[flags]

  Commands:
  ${table.toString()}`
}
// instantiate
// const help = `
// Usage
//   $ foo <input>
//
// Options
//   --rainbow, -r  Include a rainbow
//   --cloud, -r  Include a rainbow
//
// Examples
//   $ foo unicorns --rainbow
//   🌈 unicorns 🌈
