import chalk from 'chalk'

import { ConsoleLogLevel } from "../Console.lib.type"

export default function getLogLevelColor(logLevel: ConsoleLogLevel, timeText: string): string {
  switch(logLevel) {
    case 'ERROR':
      return `${chalk.redBright(timeText)}`
    case 'INFO':
      return `${chalk.blueBright(timeText)}`
    default: 
      return timeText
  }
}