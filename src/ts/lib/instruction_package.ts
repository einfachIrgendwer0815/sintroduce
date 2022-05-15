import Queue from './queue';
import { Instruction } from './instruction';

export default interface InstructionPackage {
  id: number,
  name: string,
  instructions: Queue<Instruction>,
}
