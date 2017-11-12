import find from 'lodash/find'
import {h, render} from 'ink'
export default function(components, {input, flags}) {
  const component = find(components, {input: input[0]})
  Object.assign(component.render.props, flags)
  render(component.render)
}
