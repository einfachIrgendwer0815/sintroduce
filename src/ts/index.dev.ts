import Sintro from './sintroduce';
import { VERSION, AUTHOR, LICENSE } from './metadata';

import Queue from './lib/queue';

/* expose instance of
 * the Sintroduce class
 */
var Sintroduce = new Sintro();

Sintroduce.VERSION = VERSION + "-dev";
Sintroduce.AUTHOR = AUTHOR;
Sintroduce.LICENSE = LICENSE;

export { Sintroduce, Sintro, Queue };
