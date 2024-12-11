import type { FileSystem } from "./FileSystem.lib.type";

import is from "./properties/is.property";
import manipulate from "./properties/manipulate.property";
import path from "./properties/path.property";

import fsPromise from "fs/promises"

const FileSystem: FileSystem = {
  is,
  manipulate,
  path,
  getFileStatistic: (path: string) => {
    return fsPromise.lstat(path)
  }
}

export default FileSystem