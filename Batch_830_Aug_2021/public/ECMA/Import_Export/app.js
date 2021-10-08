import * as mathLib from '../Import_Export/lib/mathUtil.js';

import {getAddition, displayMsg} from '../Import_Export/lib/mathUtil.js';

var count = 99;


var result1 = mathLib.getAddition(20, 30);
document.querySelector('#rblock1').innerHTML = result1;

var result2 = mathLib.getAddition(20, 30, 20, 10);
document.querySelector('#rblock2').innerHTML = result2;

var result3 = mathLib.getAddition(20, 30);
document.querySelector('#rblock3').innerHTML = result3;

mathLib.displayMsg();
