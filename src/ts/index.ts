import Sintro from './sintroduce';
import { VERSION, AUTHOR, LICENSE } from './metadata';

/* expose instance of
 * the Sintroduce class
 */
var Sintroduce = new Sintro();

Sintroduce.VERSION = VERSION;
Sintroduce.AUTHOR = AUTHOR;
Sintroduce.LICENSE = LICENSE;

export default Sintroduce;
