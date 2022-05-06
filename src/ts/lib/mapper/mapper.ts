import { Instruction } from '../instruction';
import Queue from '../queue';

export default interface IMapper {
  feedData: (parentElement: HTMLElement) => void,
  getListOfTimeStatedObjects: () => Element[],
  getNavigatorInstructions: () => Queue<Instruction>,
}
