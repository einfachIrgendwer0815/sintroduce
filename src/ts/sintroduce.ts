export default class Sintroduce {
  public VERSION: string;
  public AUTHOR: string;
  public LICENSE: string;

  private isReady: boolean = false;

  constructor() { }

  public getIsReady(): boolean {
    return this.isReady;
  }
}
