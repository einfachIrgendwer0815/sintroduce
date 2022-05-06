import IMapper from './mapper/mapper';
import Queue from './queue';
import Stack from './stack';
import { Instruction } from './instruction';

export default class Navigator {
  private past: Queue<Instruction>;
  private future: Queue<Instruction>;
  private present: Stack<HTMLElement>;

  private position: number[] = new Array<number>();

  constructor(private viewport: HTMLElement, mapper: IMapper) {
    mapper.feedData(viewport);
    this.future = mapper.getNavigatorInstructions();
  }

  public jumpToStart(): void {

  }

  public getPosition(): number[] {
    return this.position;
  }
}
