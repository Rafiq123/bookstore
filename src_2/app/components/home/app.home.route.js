'use strict';


function routeConfig($stateProvider){
    $stateProvider
    .state('home',{
        parent : 'bookstore',
        url:'/home',
        views : {
            "content@bookstore":'homeComponent'
        }
    });
}

routeConfig.$inject = ['$stateProvider'];

export default routeConfig;