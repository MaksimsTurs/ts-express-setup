import type { TFileSystemIs } from "../FileSystem.type";

import fsPromises from 'fs/promises'

const is: TFileSystemIs = {
  directory: async function(path) {
    return (await fsPromises.lstat(path)).isDirectory()
  },
  file: async function(path) {
    return (await fsPromises.lstat(path)).isFile()
  }
}

export default is