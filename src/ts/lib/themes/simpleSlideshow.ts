import ITheme from './theme';
import StepByStepMapper from '../mapper/stepByStepMapper';

export default class SimpleSlideshow implements ITheme {
  private map: Array<Array<Element>>;
  private position: number[];

  private viewport: HTMLElement;

  public initialize(parentElement: HTMLElement, contentContainer: HTMLElement): void {
    this.setupViewport(parentElement);
    this.copyContent(contentContainer);

    this.map = (new StepByStepMapper()).map(this.viewport);
  }

  /* add viewport elements to the DOM */
  private setupViewport(parentElement: HTMLElement): void {
    this.viewport = document.createElement('div');
    this.viewport.id = "sintroduce-viewport";

    parentElement.appendChild(this.viewport);
  }

  private copyContent(contentContainer: HTMLElement): void {
    Array.from(contentContainer.children).forEach(element => {
      this.viewport.appendChild(element);
    });

    contentContainer.remove();
  }

  public getPosition(): number[] {
    return this.position;
  }

  public jumpTo(position: number[]): void {

  }

  public jumpToHashLocPosition(): void {

  }

  public setHashLoc(): void {

  }
}
