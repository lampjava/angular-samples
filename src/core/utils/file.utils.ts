import { StringUtils } from './string.utils';

// @FileUtils class
export class FileUtils {

  public static getFileExtension (filepath: string) {
    if (StringUtils.isNotEmpty(filepath)) {
      return filepath.split('.').pop();
    }
    return '';
  }

  public static getFilename (filepath: string) {
    if (StringUtils.isNotEmpty(filepath)) {
      return filepath.split(/(\\|\/)/g).pop();
    }
    return '';
  }

  public static getFileInfo (filename: string) {
    let lastIndex = filename.lastIndexOf('.');
    let len = filename.length;
    let ext = null;
    let name = filename;
    if (lastIndex > -1) {
      ext = filename.substr((lastIndex + 1), len);
      name = filename.substr(0, lastIndex);
    }
    return {
      len : len,
      ext : ext,
      name : name
    };
  }

}
