export default class Stack<T> {
  private elements: Array<T>;

  constructor(elements: Array<T>) {
    this.elements = elements !== undefined ? elements : new Array<T>();
  }

  public push(element: T): void {
    this.elements.push(element);
  }

  public pop(): T {
    if(this.elements.length == 0) return undefined;

    var element: T = this.elements[-1];
    this.elements.pop();

    return element;
  }

  public toArray(): Array<T> {
    return [...this.elements];
  }
}
