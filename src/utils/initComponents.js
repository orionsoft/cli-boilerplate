import find from 'lodash/find'
import {h, render} from 'ink'
import {version} from '../../package.json'

export default function(components, {input, flags}) {
  if (flags.v) {
    console.log(version)
  }

  const component = find(components, {input: input[0]})

  if (typeof component !== 'undefined') {
    Object.assign(component.render.props, flags)
    render(component.render)
  }
}
