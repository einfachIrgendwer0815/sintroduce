import IMapper from './mapper';
import { Instruction, SetPresent } from '../instruction';
import Queue from '../queue';
import InstructionPackage from '../instruction_package';

export default class StepByStepMapper implements IMapper {
  private timeStatedElements: Element[] = [];
  private package: InstructionPackage = {id: 0, name: '', instructions: new Queue<Instruction>()};

  constructor(private names: { [key: string]: string }) { }

  public feedData(parentElement: HTMLElement): void {
    this.package.instructions.clear();

    for(var i: number = 0; i < parentElement.children.length; i++) {
      var el: Element = parentElement.children[i];

      if(el.tagName != "SECTION") continue;

      var frags: HTMLCollectionOf<Element> = el.getElementsByClassName("fragment");

      this.package.instructions.append(new SetPresent(el))
      for(var j: number = 0; j < frags.length; j++) {
        this.package.instructions.append(new SetPresent(frags[j]));

        this.timeStatedElements.push(frags[j]);
      }

      this.timeStatedElements.push(el);
    }
  }

  public getListOfTimeStatedObjects(): Element[] {
    return [...this.timeStatedElements];
  }

  public getNavigationPackages(): InstructionPackage[] {
    var nav_pkg: InstructionPackage = {
      id: 0,
      name: '',
      instructions: this.package.instructions.copy()
    };

    return [nav_pkg];
  }

  public getFirstPackageId(): number {
    return 0;
  }
}
