import { Instruction } from './instruction';
import Stack from './stack';

const INSTRUCTION_EXECUTORS: { [id: string]: (instr: Instruction, stack: Stack<HTMLElement|Element>, names: { [id: string]: string }) => void } = {
  'present': present
};

function performInstr(instr: Instruction, stack: Stack<HTMLElement|Element>, names: { [id: string]: string }): void {
  if(INSTRUCTION_EXECUTORS[instr.action] == undefined) return;

  INSTRUCTION_EXECUTORS[instr.action](instr, stack, names);
}

function present(instr: Instruction, stack: Stack<HTMLElement|Element>, names: { [id: string]: string }): void {
  if (stack.length() > 0) {
    let parents = _getParentElements(instr.data.element, names);

    while(stack.length() > 0 && !parents.includes(stack.peek())) {
      let el = stack.pop();
      _setPast(el);
    }

    for(let i = (parents.length-1); i >= 0; i--) {
      if(stack.includes(parents[i])) continue;

      _setPresent(parents[i]);
      stack.push(parents[i]);
    }
  }
  _setPresent(instr.data.element);
  stack.push(instr.data.element);
}

function _getParentElements(element: HTMLElement|Element, names: { [id: string]: string }): Array<HTMLElement|Element> {
  var parents: Array<HTMLElement|Element> = [];
  var currentElement: HTMLElement|Element = element.parentElement;


  var reachedTop: boolean = element.parentElement.id == names.viewport;
  while (!reachedTop) {
    if(currentElement.getAttribute("time-stated") == "1") {
      parents.push(currentElement);
    }

    if(currentElement.parentElement.id == names.viewport) {
      reachedTop = true;
    }

    currentElement = currentElement.parentElement;
  }

  return parents;
}

function _setPast(element: HTMLElement|Element): void {
  element.classList.remove('present');
  element.classList.remove('future');
  element.classList.add('past');
}

function _setPresent(element): void {
  element.classList.remove('past');
  element.classList.remove('future');
  element.classList.add('present');
}

export { INSTRUCTION_EXECUTORS, performInstr }
