'use strict';

module.exports = function(app) {
	var categories = require('../../app/controllers/categories.server.controller');
	var users = require('../../app/controllers/users.server.controller');

	app.route('/categories')
	  .get(users.requiresLogin, categories.list)
	  .post(categories.create);

	app.route('/categories/:categoryId')
     	  .get(categories.read);

	// Finish by binding the article middleware
//        app.param('categoryId', categories.categoryByID);
};
