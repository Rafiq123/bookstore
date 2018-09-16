'use strict';


function routeConfig($stateProvider){
    $stateProvider
    .state('about',{
        parent : 'bookstore',
        url:'/about',
        views : {
            "content@bookstore":'aboutComponent'
        }
    });
}

routeConfig.$inject = ['$stateProvider'];

export default routeConfig;