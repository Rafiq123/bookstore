'use strict';

export default function routeConfig($stateProvider, $urlRouterProvider){

    $stateProvider.state('bookstore', {
		url: '',
		views: {
			'@': 'appContainer'
		}
    });

	$urlRouterProvider.otherwise(wrongRouterHandler);
    $urlRouterProvider.rule(trailingSlashRemover);
   
}

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function wrongRouterHandler($injector, $location) {
    const state = $injector.get('$state');
    state.go('home', $location.search());
    return $location.path();
}

wrongRouterHandler.$inject = ['$injector', '$location'];

function trailingSlashRemover($injector, $location){
    let path = $location.path();
	if(path !== '/' && path.slice(-1) === '/') {
		$location.replace().path(path.slice(0, -1));
	}
}

trailingSlashRemover.$inject = ['$injector', '$location'];
