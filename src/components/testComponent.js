import {h, render, Component} from 'ink'

export default class Testing extends Component {
  render(props, state) {
    return `<div>${props.cloud}</div>`
  }
}
