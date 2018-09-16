module.exports = angular.module('bookstore.welcome',[])
.controller('welcomeCtrl', require('./welcome.ctrl'))
.config(require('./welcome.route'));