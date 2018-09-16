'use strict';

//import {} from './components/pages/app-container/'

function routeConfig($stateProvider,$urlRouterProvider){
    $stateProvider.
    state('books',{
        url:'',
        views:{
            '@':{
                template: require('./components/pages/app-container/app-container.html')
            }
        }
    });

    $urlRouterProvider.otherwise('/test');

    function wrongRouterHandler($injector, $location) {
        let state = $injector.get('$state');
        state.go('home', $location.search());
        return $location.path();
    }

    wrongRouterHandler.$inject = ['$injector', '$location'];

    $urlRouterProvider.rule(trailingSlashRemover);
    
    function trailingSlashRemover($injector, $location){
        let path = $location.path();
        if(path !== '/' && path.slice(-1) === '/') {
            $location.replace().path(path.slice(0, -1));
        }
    }

    trailingSlashRemover.$inject = ['$injector', '$location'];
    
    
}

routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];

module.exports = routeConfig;