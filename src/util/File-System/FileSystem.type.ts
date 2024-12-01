import type { CopyOptions, RmOptions } from "fs"

export type TFileSystemUtil = {
  is: TFileSystemIs
  manipulate: TFileSystemManipulate
  path: TFileSystemPath
}

export type TFileSystemIs = {
  directory: (path: string) => Promise<boolean>
  file: (path: string) => Promise<boolean>
}

export type TFileSystemPath = {
  getName: (path: string) => string
  getFileExtention: (path: string) => string
  rename: (path: string, newName: string) => string
}

export type TFileSystemManipulate = {
  copyOne: (from: string, to: string, options?: CopyOptions) => Promise<void>
  copyMany: (from: string[], to: string, options?: CopyOptions) => Promise<void>
  deleteOne: (from: string, options?: RmOptions) => Promise<void>
  deleteMany: (from: string[], options?: RmOptions) => Promise<void>
  moveOne: (from: string, to: string) => Promise<void>
  moveMany: (from: string[], to: string) => Promise<void>
}