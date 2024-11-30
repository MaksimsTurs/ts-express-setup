import type { CopyOptions, RmOptions } from "fs"

export type TFileSystemUtil = {
  is: TFileSystemIs
  manipulate: TFileSystemManipulate
}

export type TFileSystemIs = {
  directory: (path: string) => Promise<boolean>
  file: (path: string) => Promise<boolean>
}

export type TFileSystemManipulate = {
  copyOne: (from: string, to: string, options?: CopyOptions) => Promise<void>
  copyMany: (from: string[], to: string, options?: CopyOptions) => Promise<void>
  deleteOne: (from: string, options?: RmOptions) => Promise<void>
  deleteMany: (from: string[], options?: RmOptions) => Promise<void>
}