export default class Stack<T> {
  private elements: Array<T>;

  constructor(elements?: Array<T>) {
    this.elements = elements !== undefined ? elements : new Array<T>();
  }

  public push(element: T): void {
    this.elements.push(element);
  }

  public pop(): T {
    if(this.elements.length == 0) return undefined;

    var element: T = this.elements.at(-1);
    this.elements.pop();

    return element;
  }

  public peek(): T {
    if(this.elements.length == 0) return undefined;

    return this.elements.at(-1);
  }

  public toArray(): Array<T> {
    return [...this.elements];
  }

  public includes(element: T): boolean {
    return this.elements.includes(element);
  }

  public clear(): void {
    this.elements = new Array<T>();
  }

  public copy(): Stack<T> {
    return new Stack<T>([...this.elements]);
  }

  public length(): number {
    return this.elements.length;
  }
}
