#!/usr/bin/env node
import meow from 'meow'
import flags from './flags'
import components from './components'
import initComponents from './utils/initComponents'
import helpInformation from './utils/helpInformation'
import aliases from 'aliases'

// Generate help documentation based on your flags, and your components
const generateHelp = helpInformation(components, flags)
// meowJS initialization
const cli = meow(generateHelp, {alias: aliases(generateHelp, {h: 'help'})})
// Merging between meow and ink
// Here's where magics happens
initComponents(components, cli)
