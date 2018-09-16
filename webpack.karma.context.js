var angular = require('angular');
var mocks = require('angular-mocks');

require('./src/app.module');

var context = require.context('./src', true, /.spec\.js$/);
context.keys().forEach(context);