var fs = require('fs');

var checkboxes = [];
var labels = [];



for (var z = 1; z <= 4; z++) {
	for (var y = 1; y <= 4; y++) {
		for (var x = 1; x <= 4; x++) {
			var coordinates = x.toString() + y.toString() + z.toString();
			var classes = 'x' + x  + ' y' + y + ' z' + z;

			checkboxes.push('<input type="checkbox" class="x ' + classes + '" id="x' + coordinates + '"><div>X</div>');
			checkboxes.push('<input type="checkbox" class="o ' + classes + '" id="o' + coordinates + '"><div>O</div>');

			labels.push('<label class="x ' + classes + '" for="x' + coordinates + '" onclick=""></label>');
			labels.push('<label class="o ' + classes + '" for="o' + coordinates + '" onclick=""></label>');

		}
		checkboxes.push('');
		labels.push('');
	}

	checkboxes.push('');
	checkboxes.push('');
	labels.push('');
	labels.push('');
}

fs.writeFile('checkboxes.html', checkboxes.join('\n') + '\n\n\n\n\n' + labels.join('\n'));
