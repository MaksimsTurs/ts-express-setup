import type { TFileSystemManipulate } from "../FileSystem.type";

import fsPromises from 'fs/promises'

import is from './is.property'

const manipulate: TFileSystemManipulate = {
  copyOne: async function(from, to, options) {
    await fsPromises.cp(from, to, options)
  },
  copyMany: async function(from, to, options) {
    for(let index: number = 0; index < from.length; index++) {
      if(await is.directory(from[index])) {
        options = {...options, force: true, recursive: true }
        await this.copyOne(from[index], to, options)
      } else {
        await this.copyOne(from[index], to , options)
      }
    }
  },
  deleteOne: async function(from, options) {
    if(await is.directory(from)) {
      options = {...options, recursive: true, force: true }
      await fsPromises.rm(from, options)
    } else {
      await fsPromises.rm(from, options)
    }
  },
  deleteMany: async function(from, options) {
    for(let index: number = 0; index < from.length; index++) {
      await this.deleteOne(from[index], options)
    }
  }
}

export default manipulate