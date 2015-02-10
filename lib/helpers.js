/**
 * Handlebars Helpers: {{isActive}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

var hbs = require('express-hbs');
// var _ = require('lodash');

// Export helpers
var registerHelpers = function () {

	console.log('REGISTER ***')
	/**
	 * Add `active` class for current page.
	 * Customize the class in the options hash.
	 * @xample: {{isActive class="current"}}
	 *
	 * @usage: {{isActive}}
	 */
	// hbs.registerHelper('isActive', function isActive(context) {
	// 	opts.data = null;
	// 	console.log('context');
	// 	console.log(context);
	// 	console.log('this');
	// 	console.log(this);
	// 	context = _.extend(context, opts.data, this);
	// 	console.log('Xcontext');
	// 	console.log(context);
	// 	context.hash.class = context.hash.class || 'active';
	// 	var active = '';
	// 	if (context.isCurrentPage === true) {
	// 		active = ' class="' + context.hash.class + '"';
	// 	}
	// 	return new hbs.SafeString(active);
	// });

	hbs.registerHelper('active', function active(context) {
		console.log('context ***');
		console.log(context);
		// return new hbs.SafeString('aaa');
		return 'LOL';
	});

	hbs.registerHelper('cond', function (v1, operator, v2, options) {
		switch (operator) {
			case '==':
				return (v1 == v2) ? options.fn(this) : options.inverse(this);
			case '===':
				return (v1 === v2) ? options.fn(this) : options.inverse(this);
			case '<':
				return (v1 < v2) ? options.fn(this) : options.inverse(this);
			case '<=':
				return (v1 <= v2) ? options.fn(this) : options.inverse(this);
			   case '>':
				return (v1 > v2) ? options.fn(this) : options.inverse(this);
			   case '>=':
				return (v1 >= v2) ? options.fn(this) : options.inverse(this);
			case '&&':
				return (v1 && v2) ? options.fn(this) : options.inverse(this);
			case '||':
				return (v1 || v2) ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	});

	// hbs.registerHelper('readMore', function readMore(item, options) {
	// 	var isImage = false;
	// 	for(var tag = 0; tag < this.tags.length; tag++){
	// 		if (this.tags[tag].name.toLowerCase() == item.toLowerCase()){
	// 			isImage = true;
	// 		}
	// 	}
	// 	if (!isImage){
	// 		return options.fn(this);
	// 	}
	// 		return options.inverse(this);
	// });
};

module.exports = registerHelpers;
