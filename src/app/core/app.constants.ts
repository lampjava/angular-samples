import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  appName: string = 'LightSaber';

  public getAppName() {
    return this.appName;
  }

  public setAppName(name: string) {
    this.appName = name;
  }
}
