import IMapper from './mapper/mapper';
import Queue from './queue';
import Stack from './stack';
import { Instruction } from './instruction';

export default class Navigator {
  private past: Queue<Instruction>;
  private future: Queue<Instruction>;
  private present: Stack<HTMLElement>;

  private position: number[] = new Array<number>();

  constructor(private viewport: HTMLElement, private mapper: IMapper) {
    this.mapper.feedData(viewport);
    this.future = this.mapper.getNavigatorInstructions();

    this.setInitialClasses();
  }

  private setInitialClasses(): void {
    var elements: Element[] = this.mapper.getListOfTimeStatedObjects();

    for(var i: number = 0; i < elements.length; i++) {
      elements[i].classList.add("future");
    }
  }

  public jumpToStart(): void {

  }

  public getPosition(): number[] {
    return this.position;
  }
}
