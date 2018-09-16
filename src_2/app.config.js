'use strict';

export default function appConfig($locationProvider,$translateProvider,$translatePartialLoaderProvider) {
    $locationProvider.html5Mode(true);

    //translator
    $translatePartialLoaderProvider.addPart('./assets/i18n')
    $translateProvider.useLoader('$translatePartialLoader', {
         urlTemplate: '{part}/{lang}.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useLoaderCache(true);
    $translateProvider.useSanitizeValueStrategy(null);
}

appConfig.$inject = ['$locationProvider','$translateProvider','$translatePartialLoaderProvider'];
