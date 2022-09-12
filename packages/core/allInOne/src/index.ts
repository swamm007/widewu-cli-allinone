#!/usr/bin/env node

const importLocal = require('import-local')
const log = require('npmlog')

if (importLocal(__filename)) {
  console.log('Using local version of this package')
  log.info('all-in-one cli', 'you are using local version of cli')
} else {
  log.info('all-in-one cli', 'you are useing global cli')
  require('./allInOne')(process.argv.slice(2))
}
