'use strict';

module.exports = function(app){
	app.dataSources.mysqlIDs.automigrate('PruebaModelo', function(err){
		if (err) throw err;

		app.models.PruebaModelo.create([{
			name: 'Oscar',
			city: 'Bogota',
		},{
			name: 'Pedro',
			city: 'Medallo',
		
		},{
			name: 'Joaquin',
			city: 'Cucuta',

		}], function(err, PruebaModelo){
			if (err) throw err;

			console.log('Models created: \n', PruebaModelo);
		});
	});
};
