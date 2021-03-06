import { Options, processOptions } from './lib/options';
import ITheme from './lib/themes/theme';
import { Theme as ThemeEnum, ThemeClasses } from './lib/static/presentationThemes';
import Navigator from './lib/navigator';

export default class Sintroduce {
  public VERSION: string;
  public AUTHOR: string;
  public LICENSE: string;

  private isReady: boolean = false;
  private hasStarted: boolean = false;
  private paused: boolean = false;

  private options: Options;
  private names: { [key: string]: string } = {};

  private theme: ITheme;
  private navigator: Navigator;

  constructor() { }

  public initialize(options: { [key: string]: any }): void {
    this.options = processOptions(options);
    this.generateNames();

    if (!this.checkForContainer()) return;

    /* if given presentation theme is invalid (does not exist) */
    if(ThemeEnum[this.options.presentationTheme] == undefined) {
      console.error(`'${this.options.presentationTheme}' is not a valid presentationTheme.`);
      return;
    }

    /* create theme instance */
    this.theme = new ThemeClasses[this.options.presentationTheme](this.names);

    this.theme.initialize(document.body, document.getElementById(this.names.container));

    this.navigator = new Navigator(this.theme.getViewport(), this.theme.getMapper(), this.names);
    this.navigator.next();

    this.isReady = true;
  }

  private generateNames(): void {
    this.names.viewport = this.options.generalPrefix.concat("-", this.options.viewportId);
    this.names.container = this.options.generalPrefix.concat("-", this.options.containerName);
  }

  private checkForContainer(): boolean {
    return document.getElementById(this.names.container) != undefined;
  }

  public getPosition(): number[] {
    return this.navigator.getPosition();
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
