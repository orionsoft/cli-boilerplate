import {h, render, Component} from 'ink'

import {Parent} from './helloWorld'
import Testing from './testComponent'

// This is where you put your inputs, each input call a Component
export default [
  {
    input: 'test',
    render: <Parent />
  },
  {
    input: 'hello',
    render: <Testing />
  }
]
