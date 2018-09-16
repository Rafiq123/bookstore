
module.exports = angular.module('bookstore.directive',[
   require('./header/header.module').name,
   require('./navbar/navbar.module').name,
   require('./manage-book-details/manage-book-details.module').name
])