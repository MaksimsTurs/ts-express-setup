import type { FileSystemManipulate } from "../FileSystem.lib.type";

import fsPromises from 'fs/promises'

import is from './is.property'
import path from './path.property'

const manipulate: FileSystemManipulate = {
  copyOne: async function(from, to, options) {
    const dest: string = `${to}\\${path.getName(from)}`
    await fsPromises.cp(from, dest, options)
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
  },
  moveOne: async function(from, to) {
    await fsPromises.rename(from, to)
  },
  moveMany: async function(from, to) {
    for(let index: number = 0; index < from.length; index++) {
      await this.moveOne(from[index], to)
    }
  }
}

export default manipulate