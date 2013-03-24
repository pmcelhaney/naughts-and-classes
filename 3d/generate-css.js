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

}

fs.writeFile('turns.css', turns.join('\n'));

console.log(winningCombinations.join(',\n'));


