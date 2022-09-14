const pkg = require('../package.json')
const cliLog = require('@widewu-cli-allinone/log')
const semver = require('semver')
const colors = require('colors/safe')

/**
 * 检查脚手架的版本号
 */
function checkPkgVersion (): void {
  cliLog.success('当前使用的cli版本是', pkg.version)
}
/**
 * 检查node版本
 */
function checkNodeVersion (): void {
  // 当前执行环境的node版本
  const targetNodeVersion = process.version
  const { LOWEST_NODE_VERSION } = require('./config')
  if (semver.lt(targetNodeVersion, LOWEST_NODE_VERSION)) {
    throw new Error(colors.red(`node版本不能低于${LOWEST_NODE_VERSION as string}`))
  }
}
/**
 * 检查是否 root 启动
 */
function checkRoot (): void {
  const rootCheck = require('root-check')
  console.log(process.geteuid(), 'id')
  rootCheck()
  console.log(process.geteuid(), 'id')
}

/**
 * cli预先执行的函数，进行预检查等
 * @returns void
 */
function allinone (): void {
  try {
    checkPkgVersion()
    checkNodeVersion()
    checkRoot()
  } catch (error) {
    cliLog.error(error.message)
  }
}

module.exports = allinone
