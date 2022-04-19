import { Theme as PresentationTheme } from './static/presentationThemes';
import { Theme as CssTheme } from './static/cssThemes';

export interface Options {
  /* behaviour-related options */

  autoStart: boolean;

  /* DOM-related options */

  generalPrefix: string;

  viewportId: string;

  pastClass: string;
  presentClass: string;
  futureClass: string;

  dataAttributePrefix: string;

  /* style-related options */

  presentationTheme: PresentationTheme;
  cssTheme: CssTheme;
}

export const DefaultOptions: Options = {
  /* behaviour-related options */

  autoStart: true,

  /* DOM-related options */

  generalPrefix: "sintroduce",

  viewportId: "viewport",

  pastClass: "past",
  presentClass: "present",
  futureClass: "future",

  dataAttributePrefix: "data",

  /* style-related options */

  presentationTheme: PresentationTheme.SimpleSlideshow,
  cssTheme: CssTheme.StandardDark,
}

export function processOptions(options: { [ key: string ]: any }): Options {
  var compressed: Options = {...DefaultOptions};

  for (var key in options) {
    if(typeof options[key] != typeof DefaultOptions[key]) continue;

    compressed[key] = options[key];
  }

  return compressed;
}