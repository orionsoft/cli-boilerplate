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
