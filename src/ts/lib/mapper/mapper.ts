import { Instruction } from '../instruction';
import InstructionPackage from '../instruction_package';
import Queue from '../queue';

export default interface IMapper {
  feedData: (parentElement: HTMLElement) => void,
  getListOfTimeStatedObjects: () => Element[],
  getNavigationPackages: () => InstructionPackage[],
  getFirstPackageId: () => number,
}
