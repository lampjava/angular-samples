/* @StringUtils class*/
export class StringUtils {

  public static isEmpty (str: string) {
    if (str == null || str === undefined || str.length === 0) {
      return true;
    }
    return false;
  }

  public static isNotEmpty (str: string) {
    return !this.isEmpty(str);
  }

  public static nvl (str: string, repl: string) {
    if (this.isEmpty(str)) {
      return repl;
    }
    return str;
  }

  public static toBoolean(str: string) {
    return str === 'true';
  }

}
