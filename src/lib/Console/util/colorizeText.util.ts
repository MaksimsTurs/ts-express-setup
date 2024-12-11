import chalk from 'chalk'

export default function colorizeText(text: string): string {
  return text.replace(/([0-9]+)/g, `${chalk.yellowBright('$1')}`).replace(/"([^"]*)"/, `${chalk.greenBright('$1')}`)
}