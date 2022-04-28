import ITheme from './theme';
import StepByStepMapper from '../mapper/stepByStepMapper';

import IMapper from '../mapper/mapper';

export default class SimpleSlideshow implements ITheme {
  private viewport: HTMLElement;

  public initialize(parentElement: HTMLElement, contentContainer: HTMLElement): void {
    this.setupViewport(parentElement);
    this.copyContent(contentContainer);
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

  public getViewport(): HTMLElement {
    return this.viewport;
  }

  public getMapper(): IMapper {
    return new StepByStepMapper();
  }
}
