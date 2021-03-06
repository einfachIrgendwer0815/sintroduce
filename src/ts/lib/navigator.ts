import IMapper from './mapper/mapper';
import Queue from './queue';
import Stack from './stack';
import { Instruction } from './instruction';
import InstructionPackage from './instruction_package';
import { performInstr } from './instruction_executor';

export default class Navigator {
  private past: Stack<Instruction>;
  private future: Queue<Instruction>;
  private present: Stack<HTMLElement|Element>;

  private pastStacks: Stack<Stack<HTMLElement|Element>>;

  private packages: InstructionPackage[];
  private position: number[] = new Array<number>();

  constructor(private viewport: HTMLElement, private mapper: IMapper, private names: { [id: string]: string }) {
    this.mapper.feedData(viewport);

    this.packages = this.mapper.getNavigationPackages();

    this.loadPackage(this.mapper.getFirstPackageId());
    this.setInitialClasses();
  }

  private setInitialClasses(): void {
    var elements: Element[] = this.mapper.getListOfTimeStatedObjects();

    for(var i: number = 0; i < elements.length; i++) {
      elements[i].classList.add("future");
      elements[i].setAttribute("time-stated", "1");
    }
  }

  public loadPackage(id: number) {
    var instr_package;

    for(let i = 0; i < this.packages.length; i++) {
      if(this.packages[i].id == id) {
        instr_package = this.packages[i];
      }
    }

    if(instr_package == undefined) return;

    this.future = instr_package.instructions;
    this.past = new Stack<Instruction>();
    this.present = new Stack<HTMLElement|Element>();
    this.pastStacks = new Stack<Stack<HTMLElement|Element>>();
  }

  public next(): void {
    var instr = this.future.remove();
    if(instr == undefined) return;

    this.pastStacks.push(this.present.copy());

    performInstr(instr, this.present, this.names);
    this.past.push(instr);
  }

  public back(): void {
  }

  public getPosition(): number[] {
    return this.position;
  }
}
