import type { Console } from './Console.lib.type'

import { ConsoleLogLevel } from './Console.lib.type'

import colorizeText from './util/colorizeText.util'
import getLogLevelColor from './util/getLogLevelColor.util'
import getLocaleTimeString from './util/getLocaleTimeString.util'

const Console: Console = {
  info: function(text, object) {
    console.info(`${getLogLevelColor(ConsoleLogLevel.INFO, getLocaleTimeString())} - ${colorizeText(text)}`, object || '')
  },
  error: function(error) {
    const logTimText: string = getLogLevelColor(ConsoleLogLevel.ERROR, getLocaleTimeString())

    let stack: string[] = error.stack?.split(/\n/) || []
        stack = stack.slice(1, stack.length)

    console.error(`${logTimText} - ${colorizeText(error.message)}`)
    console.error(`${logTimText} - Error stack trace:`, stack)
  }
}

export default Console