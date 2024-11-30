import chalk from 'chalk'

import { TConsoleUtil, EConsoleLogLevel } from './Console.type'

const Console: TConsoleUtil = {
  info: function(text, object) {
    text = `${getLogLeveleTimeColor(EConsoleLogLevel.INFO, getLocaleLogTimeString())} - ${colorizeLogText(text)}`
    console.info(text, object || '')
  },
  error: function(text, object) {
    text = `${getLogLeveleTimeColor(EConsoleLogLevel.ERROR, getLocaleLogTimeString())} - ${colorizeLogText(text)}`
    console.info(text, object || '')
  }
}

const getLocaleLogTimeString = (): string => {
  return new Date().toLocaleTimeString()
}

const getLogLeveleTimeColor = (logLevel: EConsoleLogLevel, timeText: string): string => {
  switch(logLevel) {
    case 'ERROR':
      return `${chalk.redBright(timeText)}`
    case 'INFO':
      return `${chalk.blueBright(timeText)}`
    default: 
      return timeText
  }
}

const colorizeLogText = (text: string): string => {
  return text.replace(/([0-9]+)/g, `${chalk.yellowBright('$1')}`).replace(/"([^"]*)"/, `${chalk.greenBright('$1')}`)
}

export default Console