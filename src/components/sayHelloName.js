import {h, render, Component, Text} from 'ink'
import TextInput from 'ink-text-input'
import {SayHello} from './sayHello'
import PropTypes from 'prop-types'
export default class SayHelloName extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  state = {
    name: ''
  }

  handleChange(value) {
    this.setState(value)
  }

  handleSubmit() {
    const unmount = render(<SayHello name={this.state.name} />)
    unmount()
  }

  render(props, state) {
    return (
      <div>
        Enter your name:
        <TextInput
          value={state.name}
          onChange={value => this.handleChange({name: value})}
          onSubmit={() => this.handleSubmit()}
        />
      </div>
    )
  }
}
