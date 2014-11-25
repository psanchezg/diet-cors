/*jslint node: true */
'use strict';

var options = module.parent.options || {};
options.origins = options.origins || [];
options.methods = options.methods || ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'];

// CORS Handler Module
module.exports.global = function ($) {
    if (options.origins.indexOf($.header('origin')) > -1) {
        $.header('Access-Control-Allow-Origin', $.header('origin'));
        $.header('Access-Control-Allow-Methods', options.methods.join(','));
        $.header('Access-Control-Allow-Headers', '*, X-Requested-With, Content-Type');
        $.header('Access-Control-Allow-Credentials', true);
    }
	$['return']();
};

module.parent['return']();