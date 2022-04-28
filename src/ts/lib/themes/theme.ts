export default interface ITheme {
  initialize: (parentElement: HTMLElement, contentContainer: HTMLElement) => void,
  getPosition: () => number[],
  jumpTo: (position: number[]) => void,
  jumpToHashLocPosition: () => void,
  setHashLoc: () => void
}
