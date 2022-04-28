import IMapper from './mapper';

export default class StepByStepMapper implements IMapper {
  public map(parentElement: HTMLElement): Array<Array<Element>> {
    var map: Array<Array<Element>> = new Array<Array<Element>>();

    for(var i:number = 0; i < parentElement.children.length; i++) {
      var section: Array<Element> = Array.from(parentElement.children[i].getElementsByClassName("fragment"));

      map.push(section);
    }

    return map;
  }
}
