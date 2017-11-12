import contentTable from './contentTable'
import {version, bin, name} from '../../../package.json'

export default function(components, {flags}) {
  const flagsInfo = getFlagsInfo(flags)
  const flagsTable = contentTable('Flags', flagsInfo)

  const componentsInfo = getComponentsInfo(components)
  const componentsTable = contentTable('Commands', componentsInfo)
  return `
  ${name} v${version}

  Usage: ${Object.keys(bin)[0]} [command] [flag]
    ${componentsTable}
    ${flagsTable}
  `
}

function getFlagsInfo(flags) {
  const flagsOrdered = []
  for (const flag in flags) {
    const {help, alias} = flags[flag]
    flagsOrdered.push([`-${alias}, --${flag}`, help])
  }
  return flagsOrdered
}

function getComponentsInfo(components) {
  const componentesOrdered = []
  components.map(component => {
    componentesOrdered.push([component.input, component.help])
  })
  return componentesOrdered
}
