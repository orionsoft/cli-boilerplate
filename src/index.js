#!/usr/bin/env node
import meow from 'meow'
import {h, render, Component} from 'ink'
import help from './help'
import flags from './flags'
import components from './components'
import find from 'lodash/find'

const cli = meow(help, flags)
const component = find(components, {input: cli.input[0]})
Object.assign(component.render.props, cli.flags)
render(component.render)
