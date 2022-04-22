import ITheme from './theme';
import StepByStepMapper from '../mapper/stepByStepMapper';

export default class SimpleSlideshow implements ITheme {
  private map: Array<Array<{ [key: string]: any }>>;
  private position: number[];

  private viewport: HTMLElement;

  /* add viewport elements to the DOM */
  public setupViewport(parentElement: HTMLElement): void {
    this.viewport = document.createElement('div');
    this.viewport.id = "sintroduce-viewport";

    parentElement.appendChild(this.viewport);
  }

  public copyContent(contentContainer: HTMLElement): void {
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
