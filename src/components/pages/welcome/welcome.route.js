'use strict';

function routeConfig($stateProvider,$urlRouterProvider){
    $stateProvider
    .state("welcome",{
        parent:'books',
        url:'/welcome',
        views: {
            'welcome@books': {
                template:require('./welcome.html'),
                controller: welcomeCtrl,
                controllerAs:'welcomeCtrl'
            }
        }        
    });
}

routeConfig.$inject = ['$stateProvider','$urlRouterProvider']

module.exports = routeConfig;
