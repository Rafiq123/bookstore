'use strict';

function routeConfig($stateProvider){
    $stateProvider
    .state('manageBooks',{
        parent : 'bookstore',
        url : '/manageBooks',
        views : {
            'content@bookstore':'manageBooks'
        }
    })
}

routeConfig.$inject = ['$stateProvider'];

export default routeConfig;