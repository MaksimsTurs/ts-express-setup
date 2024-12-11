import type { FileSystemIs } from "../FileSystem.lib.type";

import fsPromises from 'fs/promises'

const is: FileSystemIs = {
  directory: async function(path) {
    return (await fsPromises.lstat(path)).isDirectory()
  },
  file: async function(path) {
    return (await fsPromises.lstat(path)).isFile()
  }
}

export default is