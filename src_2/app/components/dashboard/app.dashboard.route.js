'use strict';

function routeConfig($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('dashboard',{
        parent : 'bookstore',
        url:'/dashboard',
        views:{
            'content@bookstore':'dashboard'
        }
    });
}

routeConfig.$inject = ['$stateProvider','$urlRouterProvider']

export default routeConfig;