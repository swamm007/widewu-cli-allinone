const log = require('npmlog')

log.heading = 'widewu-cli-all-in-one'
log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'
log.addLevel('success', '2001', { fg: 'green', bg: 'red', bold: true })

log.enableProgress()

const cliLog = log

module.exports = cliLog
