import IMapper from './mapper';
import { Instruction, SetPresent } from '../instruction';
import Queue from '../queue';

export default class StepByStepMapper implements IMapper {
  private timeStatedElements: Element[] = [];
  private instructions: Queue<Instruction> = new Queue<Instruction>();

  constructor(private names: { [key: string]: string }) { }

  public feedData(parentElement: HTMLElement): void {
    this.instructions.clear();

    for(var i: number = 0; i < parentElement.children.length; i++) {
      var el: Element = parentElement.children[i];

      if(el.tagName != "SECTION") continue;

      var frags: HTMLCollectionOf<Element> = el.getElementsByClassName("fragment");

      this.instructions.append(new SetPresent(el))
      for(var j: number = 0; j < frags.length; j++) {
        this.instructions.append(new SetPresent(frags[j]));

        this.timeStatedElements.push(frags[j]);
      }

      this.timeStatedElements.push(el);
    }
  }

  public getListOfTimeStatedObjects(): Element[] {
    return this.timeStatedElements;
  }

  public getNavigatorInstructions(): Queue<Instruction> {
    return this.instructions;
  }
}
