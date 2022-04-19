import { Options, processOptions } from './lib/options';

export default class Sintroduce {
  public VERSION: string;
  public AUTHOR: string;
  public LICENSE: string;

  private isReady: boolean = false;
  private hasStarted: boolean = false;
  private paused: boolean = false;

  private options: Options;

  constructor() { }

  public initialize(options: { [key: string]: any }): void {
    this.options = processOptions(options);
  }

  public getIsReady(): boolean {
    return this.isReady;
  }

  public getHasStarted(): boolean {
    return this.hasStarted;
  }

  public getPaused(): boolean {
    return this.paused;
  }

  public getOption(option: string): any {
    return this.options[option];
  }
}
