export default interface ITheme {
  setupViewport: (parentElement: HTMLElement) => void,
  copyContent: (contentContainer: HTMLElement) => void,
  getPosition: () => number[],
  jumpTo: (position: number[]) => void,
  jumpToHashLocPosition: () => void,
  setHashLoc: () => void
}
