## CLI Boilerplate
> React and meowJS, CLI boilerplate comes configured to do quickly and easily cli apps with react and es6.

## Install

```
$ git clone https://github.com/orionsoft/cli-boilerplate [app-name]
```


## Getting Started
To start creating your own application you need to change the version, name and bin into package.json according to your application information.

```json
{
  "name": [app-name],
  "bin": {
    [app-bin]: "lib/index.js"
  },
  "version": [app-version],
  ...
 }
```
Then run the following commands:
```
yarn build
yarn watch
```
And run in your terminal your app

```
[app-bin] --help
```
Congratz :) you can start to create and test your app's components

The boilerplate comes with some funtionalities by default, so its designed for start to program commands quickly. Each command its represented by a component, when you call a command from your terminal, your actually rendering a component.

Your flags are equivalent to components props, when you a command with any flags, you're actually calling a component with its props.

Boilerplate structure
```
|-- src
|   |-- components
|   |   |-- index.js
|   |   |-- sayHello.js
|   |   |-- sayHelloName.js
|   |-- utils
|-- flags.js
|-- index.js
```
### Registering flags

When your register a new flag you might provide an alias and help text for this, the boilerplate will register it in the help text of your application automatically. And you will be able to call this flag as a props in any component

```jsx
// flags.js
export default {
  flags: {
    name: {
      type: 'string',
      alias: 'n',
      help: 'Your name'
    },
    lastname: {
      type: 'string',
      alias: 'l',
      help: 'Your lastname'
    }
  }
}
```
```jsx
// components/sayHello.js
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
```
### Creating component
Like any other React application you can create components, and use states and props to interact with them. When you want to create a component, make sure you have the following structure:

```jsx
// components/sayHelloName.js
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
```
And don't forget to register your component in the following file:

```js
// components/index.js
import {h} from 'ink'
import {SayHello} from './sayHello'
import SayHelloName from './sayHelloName'

// This is where you put your inputs, each input call a Component
export default [
  {
    input: 'say-hello',
    render: <SayHello />,
    help: 'terminal greets you'
  },
  {
    input: 'say-hello-to-me',
    render: <SayHelloName />,
    help: 'terminal greets you by your name'
  }
]
```

### Further Documentation

- [ink](https://github.com/vadimdemedes/ink) - Ink.
- [meow](https://github.com/sindresorhus/meow) - Meow.
