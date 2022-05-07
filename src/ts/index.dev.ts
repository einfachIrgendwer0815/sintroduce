import Sintro from './sintroduce';
import { VERSION, AUTHOR, LICENSE } from './metadata';

/* expose parts for testing */
import Queue from './lib/queue';
import Stack from './lib/stack';

import { Instruction, SetPresent } from './lib/instruction';

/* expose instance of
 * the Sintroduce class
 */
var Sintroduce = new Sintro();

Sintroduce.VERSION = VERSION + "-dev";
Sintroduce.AUTHOR = AUTHOR;
Sintroduce.LICENSE = LICENSE;

/* export everything */
export { Sintroduce, Sintro, Queue, Stack, Instruction, SetPresent };
