export type Console = {
  info: (text: string, object?: any) => void
  error: (error: Error) => void
}

export enum ConsoleLogLevel {
  ERROR = 'ERROR',
  INFO = 'INFO'
}