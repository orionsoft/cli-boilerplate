#!/usr/bin/env node
import meow from 'meow'
import flags from './flags'
import components from './components'
import initComponents from './utils/initComponents'
import helpInformation from './utils/helpInformation'
import {h} from 'ink'
const cli = meow('helpInformation(components, flags)', flags)

initComponents(components, cli)
