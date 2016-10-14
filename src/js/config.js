(function (angular) {
    'use strict';

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
    angular.module('app.config', [
        'ngComponentRouter',
        'champions.header',
        'champions.footer',
        'champions.home',
        'champions.season'

    ])
    .config(config)
    .value('$routerRootComponent', 'championsView')
    .component('championsView', {
        template:
            '<champions-header></champions-header>' +
            '<div class="view"><ng-outlet></ng-outlet></div>' +
            '<champions-footer></champions-footer>',
        $routeConfig: [
            {
                path: '/',
                name: 'Home',
                component: 'championsHome',
                useAsDefault: true
            },
            {
                path: '/season/:year/:winner',
                name: 'Season',
                component: 'seasonDetail'
            }
        ]
    });
})(angular);
