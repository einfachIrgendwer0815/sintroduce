import IMapper from './mapper';
import Instruction from '../instruction';
import Queue from '../queue';

export default class StepByStepMapper implements IMapper {
  public generateNavigatorInstructions(parentElement: HTMLElement): Queue<Instruction> {
    var instructions = new Queue<Instruction>();

    return instructions;
  }
}
