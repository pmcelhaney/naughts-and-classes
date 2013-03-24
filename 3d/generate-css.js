var fs = require('fs');

var turns = [];

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

fs.writeFile('turns.css', turns.join('\n'));