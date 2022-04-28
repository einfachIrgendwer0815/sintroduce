import Instruction from '../instruction';
import Queue from '../queue';

export default interface IMapper {
  generateNavigatorInstructions: (parentElement: HTMLElement) => Queue<Instruction>,
}
