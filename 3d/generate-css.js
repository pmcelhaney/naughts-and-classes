var fs = require('fs');

var turns = [];
var winningCombinations = [];


turns.push('label.if-o-goes-first { display: none; }');
turns.push('#o-first:target label.if-o-goes-first { display: block; }');


var oChecked = '';
var xChecked = '';

for (var zIndex = 64; zIndex > 0; zIndex--) {
	turns.push(xChecked + 'label.x, #o-first:target ' + oChecked + 'label.o { z-index: ' + zIndex + '; }');
	turns.push(oChecked + 'label.o, #o-first:target ' + xChecked + 'label.x { z-index: ' + zIndex + '; }');

	oChecked += '.o:checked ~ ';
	xChecked += '.x:checked ~ ';

}




for (var i = 1; i <=4; i++) {
	for (var j = 1; j <= 4; j++) {

		// across (x axis)
		var selector = '.y' + i + '.z' + j + ':checked';
		winningCombinations.push('.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.if-o-wins');
		winningCombinations.push('.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.if-x-wins');

		// down (y axis)
		selector = '.x' + i + '.z' + j + ':checked';
		winningCombinations.push('.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.if-o-wins');
		winningCombinations.push('.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.if-x-wins');

		// in (z axis)
		selector = '.x' + i + '.y' + j + ':checked';
		winningCombinations.push('.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.o' + selector + ' ~ ' + '.if-o-wins');
		winningCombinations.push('.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.x' + selector + ' ~ ' + '.if-x-wins');

	}

	// diagonal (xy)
	selector =  '.z' + i + ':checked';
	winningCombinations.push('.o.x1.y1' + selector + ' ~ ' + '.o.x2.y2' + selector + ' ~ ' + '.o.x3.y3' + selector + ' ~ ' + '.o.x4.y4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.x.x1.y1' + selector + ' ~ ' + '.x.x2.y2' + selector + ' ~ ' + '.x.x3.y3' + selector + ' ~ ' + '.x.x4.y4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.o.x4.y1' + selector + ' ~ ' + '.o.x3.y2' + selector + ' ~ ' + '.o.x2.y3' + selector + ' ~ ' + '.o.x1.y4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.x.x4.y1' + selector + ' ~ ' + '.x.x3.y2' + selector + ' ~ ' + '.x.x2.y3' + selector + ' ~ ' + '.x.x1.y4' + selector + ' ~ ' + '.if-o-wins');

	// diagonal (yz)
	selector =  '.x' + i + ':checked';
	winningCombinations.push('.o.y1.z1' + selector + ' ~ ' + '.o.y2.z2' + selector + ' ~ ' + '.o.y3.z3' + selector + ' ~ ' + '.o.y4.z4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.x.y1.z1' + selector + ' ~ ' + '.x.y2.z2' + selector + ' ~ ' + '.x.y3.z3' + selector + ' ~ ' + '.x.y4.z4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.o.y4.z1' + selector + ' ~ ' + '.o.y3.z2' + selector + ' ~ ' + '.o.y2.z3' + selector + ' ~ ' + '.o.y1.z4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.x.y4.z1' + selector + ' ~ ' + '.x.y3.z2' + selector + ' ~ ' + '.x.y2.z3' + selector + ' ~ ' + '.x.y1.z4' + selector + ' ~ ' + '.if-o-wins');


	// diagonal (xz)
	selector =  '.y' + i + ':checked';
	winningCombinations.push('.o.x1.z1' + selector + ' ~ ' + '.o.x2.z2' + selector + ' ~ ' + '.o.x3.z3' + selector + ' ~ ' + '.o.x4.z4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.x.x1.z1' + selector + ' ~ ' + '.x.x2.z2' + selector + ' ~ ' + '.x.x3.z3' + selector + ' ~ ' + '.x.x4.z4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.o.x4.z1' + selector + ' ~ ' + '.o.x3.z2' + selector + ' ~ ' + '.o.x2.z3' + selector + ' ~ ' + '.o.x1.z4' + selector + ' ~ ' + '.if-o-wins');
	winningCombinations.push('.x.x4.z1' + selector + ' ~ ' + '.x.x3.z2' + selector + ' ~ ' + '.x.x2.z3' + selector + ' ~ ' + '.x.x1.z4' + selector + ' ~ ' + '.if-o-wins');

}

// 3D diagonals
winningCombinations.push('.o.x1.y1.z1:checked ~ .o.x2.y2.z2:checked ~ .o.x3.y3.z3:checked ~ .o.x4.y4.z4:checked ~ .if-o-wins');
winningCombinations.push('.x.x1.y1.z1:checked ~ .x.x2.y2.z2:checked ~ .x.x3.y3.z3:checked ~ .x.x4.y4.z4:checked ~ .if-x-wins');
winningCombinations.push('.o.x4.y1.z1:checked ~ .o.x3.y2.z2:checked ~ .o.x2.y3.z3:checked ~ .o.x1.y4.z4:checked ~ .if-o-wins');
winningCombinations.push('.x.x4.y1.z1:checked ~ .x.x3.y2.z2:checked ~ .x.x2.y3.z3:checked ~ .x.x1.y4.z4:checked ~ .if-x-wins');
winningCombinations.push('.o.x4.y4.z1:checked ~ .o.x3.y3.z2:checked ~ .o.x2.y2.z3:checked ~ .o.x1.y1.z4:checked ~ .if-o-wins');
winningCombinations.push('.x.x4.y4.z1:checked ~ .x.x3.y3.z2:checked ~ .x.x2.y2.z3:checked ~ .x.x1.y1.z4:checked ~ .if-x-wins');
winningCombinations.push('.o.x1.y4.z1:checked ~ .o.x2.y3.z2:checked ~ .o.x3.y2.z3:checked ~ .o.x4.y1.z4:checked ~ .if-o-wins');
winningCombinations.push('.x.x1.y4.z1:checked ~ .x.x2.y3.z2:checked ~ .x.x3.y2.z3:checked ~ .x.x4.y1.z4:checked ~ .if-x-wins');


fs.writeFile('turns.css', turns.join('\n'));

console.log(winningCombinations.join(',\n'));


