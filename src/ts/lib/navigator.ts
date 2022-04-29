import IMapper from './mapper/mapper';
import Queue from './queue';
import Stack from './stack';
import Instruction from './instruction';

export default class Navigator {
  private past: Queue<Instruction>;
  private future: Queue<Instruction>;
  private present: Stack<HTMLElement>;

  private position: number[] = new Array<number>();

  private viewport: HTMLElement;

  constructor(viewport: HTMLElement, mapper: IMapper) {
    this.viewport = viewport;

    this.future = mapper.generateNavigatorInstructions(viewport);
  }

  public jumpToStart(): void {

  }

  public getPosition(): number[] {
    return this.position;
  }
}
