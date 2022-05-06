import IMapper from './mapper';
import { Instruction, SetPresent } from '../instruction';
import Queue from '../queue';

export default class StepByStepMapper implements IMapper {
  private timedStatedElements: Element[];
  private instructions: Queue<Instruction> = new Queue<Instruction>();

  constructor(private names: { [key: string]: string }) { }

  public feedData(parentElement: HTMLElement): void {
    this.instructions.clear();

    for(var i: number = 0; i < parentElement.children.length; i++) {
      var el: Element = parentElement.children[i];

      if(el.tagName != "SECTION") continue;

      var frags: HTMLCollectionOf<Element> = el.getElementsByClassName("fragment");

      if(frags.length == 0) {
        this.instructions.append(new SetPresent(el))
      } else {
        for(var j: number = 0; j < frags.length; j++) {
          this.instructions.append(new SetPresent(frags[j]));
        }
      }
    }
  }

  public getListOfTimeStatedObjects(): Element[] {
    return this.timedStatedElements;
  }

  public getNavigatorInstructions(): Queue<Instruction> {
    return this.instructions;
  }
}
