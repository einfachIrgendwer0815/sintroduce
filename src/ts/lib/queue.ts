export default class Queue<T> {
  private elements: Array<T>;

  constructor(elements?: Array<T>) {
    this.elements = elements === undefined ? new Array<T>() : elements;
  }

  public toArray(): Array<T> {
    return [...this.elements];
  }

  public includes(element: T): boolean {
    return this.elements.includes(element);
  }

  public append(element: T): void {
    this.elements.push(element);
  }

  public remove(): T {
    if(this.elements.length == 0) return;
    return this.elements.splice(0,1)[0];
  }

  public reverseAppend(element: T): void {
    this.elements = [element].concat(this.elements);
  }

  public reverseRemove(): T {
    if(this.elements.length == 0) return;
    return this.elements.pop();
  }

  public clear(): void {
    this.elements = new Array<T>();
  }

  public copy(): Queue<T> {
    return new Queue<T>([...this.elements]);
  }

  public peek(): T {
    if(this.elements.length == 0) return;

    return this.elements[0];
  }

  public length(): number {
    return this.elements.length;
  }
}
