export class StorageUtils {

  public static setItem(key: string, value?: any): void {
    localStorage.setItem(key, value);
  }

  public static setItems(values: Array<any>): void {
    for (const index in values) {
      StorageUtils.setItem(values[index].key, values[index].value);
    }
  }

  public static getItem(key: string): string {
    return localStorage.getItem(key);
  }

  public static getItems(keys: Array<string>): any {
    const items: any = {};
    for (const index in keys) {
      items[keys[index]] = StorageUtils.getItem(keys[index]);
    }
    return items;
  }
}
