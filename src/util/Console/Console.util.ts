import chalk from 'chalk'

import type { TConsoleUtil } from './Console.type'

import { CONSOLE_LOG_LEVEL } from './Console.const'

const Console: TConsoleUtil = {
  info: function(text, object) {
    text = `${getLogLeveleTimeColor('INFO', getLocaleLogTimeString())} - ${colorizeLogText(text)}`
    console.info(text, object || '')
  },
  error: function(text, object) {
    text = `${getLogLeveleTimeColor('ERROR', getLocaleLogTimeString())} - ${colorizeLogText(text)}`
    console.info(text, object || '')
  }
}

const getLocaleLogTimeString = (): string => {
  return new Date().toLocaleTimeString()
}

const getLogLeveleTimeColor = (logLevel: keyof typeof CONSOLE_LOG_LEVEL, timeText: string): string => {
  switch(logLevel) {
    case 'ERROR':
      return `${chalk.redBright(timeText)}`
    case 'INFO':
      return `${chalk.blueBright(timeText)}`
  }
}

const colorizeLogText = (text: string): string => {
  return text.replace(/([0-9]+)/g, `${chalk.yellowBright('$1')}`).replace(/"([^"]*)"/, `${chalk.greenBright('$1')}`)
}

export default Console