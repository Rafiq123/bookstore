require('./vendor.js')();


module.exports = angular.module('bookstore',[
    'ui.router',
    'ngMaterial',
    'md.data.table',
    require('./components/directives/bookstore.directive.module').name,
    require('./components/pages/bookstore.pages.module').name ,
    require('./components/shared/shared.module').name 
]).
config(require('./app.route.js'));
