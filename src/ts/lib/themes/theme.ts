import IMapper from '../mapper/mapper';

export default interface ITheme {
  initialize: (parentElement: HTMLElement, contentContainer: HTMLElement) => void,
  getViewport: () => HTMLElement,
  getMapper: () => IMapper
}
