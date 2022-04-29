import Sintro from './sintroduce';
import { VERSION, AUTHOR, LICENSE } from './metadata';

import Queue from './lib/queue';
import Stack from './lib/stack';

/* expose instance of
 * the Sintroduce class
 */
var Sintroduce = new Sintro();

Sintroduce.VERSION = VERSION + "-dev";
Sintroduce.AUTHOR = AUTHOR;
Sintroduce.LICENSE = LICENSE;

export { Sintroduce, Sintro, Queue, Stack };
