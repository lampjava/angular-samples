/* @StringUtils class*/
export class StringUtils {

  public static isEmpty (str: string): boolean {
    if (str == null || str === undefined || str.length === 0) {
      return true;
    }
    return false;
  }

  public static isNotEmpty (str: string): boolean {
    return !this.isEmpty(str);
  }

  public static nvl (str: string, repl: string): string {
    if (this.isEmpty(str)) {
      return repl;
    }
    return str;
  }

  public static toBoolean (str: string): boolean {
    return str === 'true';
  }

}
