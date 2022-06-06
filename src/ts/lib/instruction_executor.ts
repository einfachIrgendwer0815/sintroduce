import { Instruction } from './instruction';

const INSTRUCTION_EXECUTORS: { [id: string]: { [id: string]: (instr: Instruction) => void } } = {
  'present': {
    'normal': present,
    'reverse': presentReverse
  },
};

function performInstr(instr: Instruction, direction: 'normal' | 'reverse' = 'normal'): void {
  if(INSTRUCTION_EXECUTORS[instr.action] == undefined) return;

  INSTRUCTION_EXECUTORS[instr.action][direction](instr);
}

function present(instr: Instruction): void {
  instr.data.element.classList.remove("future");
  instr.data.element.classList.add("present");
}

function presentReverse(instr: Instruction): void {
  instr.data.element.classList.remove("present");
  instr.data.element.classList.add("future");
}

export { INSTRUCTION_EXECUTORS, performInstr }
