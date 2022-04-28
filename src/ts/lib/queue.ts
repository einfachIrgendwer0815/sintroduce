export default class Queue<T> {
  private elements: Array<T>;

  constructor(elements?: Array<T>) {
    this.elements = elements === undefined ? new Array<T>() : elements;
  }

  public toArray(): Array<T> {
    return [...this.elements];
  }

  public append(element: T): void {
    this.elements.push(element);
  }

  public remove(): void {
    this.elements.splice(0,1);
  }

  public reverseAppend(element: T): void {
    this.elements = [element].concat(this.elements);
  }

  public reverseRemove(): void {
    this.elements.pop();
  }
}
