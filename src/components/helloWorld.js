import {h, render, Component, Text} from 'ink'

export class Child extends Component {
  render() {
    return null
  }

  hello() {
    return 'Hello World'
  }
}

export class Parent extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      message: 'Ink is awesome'
    }
  }

  render(props, state) {
    return <Text>Hsello!</Text>
  }
}
