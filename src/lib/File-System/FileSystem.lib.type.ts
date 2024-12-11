import type { CopyOptions, RmOptions, Stats } from "fs"

export type FileSystem = {
  is: FileSystemIs
  manipulate: FileSystemManipulate
  path: FileSystemPath
  getFileStatistic: (path: string) => Promise<Stats>
}

export type FileSystemIs = {
  directory: (path: string) => Promise<boolean>
  file: (path: string) => Promise<boolean>
}

export type FileSystemPath = {
  getName: (path: string) => string
  getFileExtention: (path: string) => string
  rename: (path: string, newName: string) => string
}

export type FileSystemManipulate = {
  copyOne: (from: string, to: string, options?: CopyOptions) => Promise<void>
  copyMany: (from: string[], to: string, options?: CopyOptions) => Promise<void>
  deleteOne: (from: string, options?: RmOptions) => Promise<void>
  deleteMany: (from: string[], options?: RmOptions) => Promise<void>
  moveOne: (from: string, to: string) => Promise<void>
  moveMany: (from: string[], to: string) => Promise<void>
}