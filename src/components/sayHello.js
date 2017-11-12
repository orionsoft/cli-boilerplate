import {h, render, Component, Text} from 'ink'

export class Child extends Component {
  render() {
    return null
  }

  hello() {
    return 'Hello World'
  }
}

export class SayHello extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      message: 'Ink is awesome'
    }
  }

  render(props, state) {
    const {name, lastname} = props
    return (
      <Text>
        Hello! {name} {lastname}
      </Text>
    )
  }
}
