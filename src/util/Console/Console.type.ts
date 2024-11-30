export type TConsoleUtil = {
  info: (text: string, object?: any) => void
  error: (text: string, object?: any) => void
}

export enum EConsoleLogLevel {
  ERROR = 'ERROR',
  INFO = 'INFO'
}