type elementType = HTMLElement | Element;

export interface Instruction {
  action: string,
  data: any,
}

export class SetPresent implements Instruction {
  public action: 'present' = 'present';
  public data: {
    element: elementType,
  };

  constructor(element: elementType) {
    this.data = {
      element: element,
    };
  }
}
