import type { TFileSystemUtil } from "./FileSystem.type";

import is from "./properties/is.property";
import manipulate from "./properties/manipulate.property";

const FileSystem: TFileSystemUtil = {
  is,
  manipulate
}

export default FileSystem