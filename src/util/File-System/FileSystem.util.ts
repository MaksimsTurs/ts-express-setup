import type { TFileSystemUtil } from "./FileSystem.type";

import is from "./properties/is.property";
import manipulate from "./properties/manipulate.property";
import path from "./properties/path.property";

const FileSystem: TFileSystemUtil = {
  is,
  manipulate,
  path
}

export default FileSystem