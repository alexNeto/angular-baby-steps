import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  constructor() {}

  public consoleLog(msg: string) {
    console.log(msg);
  }
}
