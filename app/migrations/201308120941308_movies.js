var products = [];
for (var i = 0; i < 500; i++) {
	if (i%7 === 0) {
		products.push({
			title: 'This is the title',
			subtitle: 'This is the slightly more verbose subtitle',
			image: i%2 ? '/appc.png' : '/alloy.png'
		});
	} else if (i%2) {
		products.push({
			title: 'This is the title with subtitle',
			subtitle: 'This is the slightly more verbose subtitle'
		});
	} else {
		products.push({
			title: 'This is the lonely title'
		});
	}
}

migration.up = function(migrator) {
	for (var i = 0; i < products.length; i++) {
		migrator.insertRow(products[i]);
	}
};

migration.down = function(migrator) {
	for (var i = 0; i < products.length; i++) {
		migrator.deleteRow(products[i]);
	}
};
