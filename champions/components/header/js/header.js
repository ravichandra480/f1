(function (angular) {
    var templateUrl = 'components/header/html/header.html';

    angular.module('champions.header', [
        templateUrl
    ])
    .value('championsHeader')
    .component('championsHeader', {
        templateUrl: templateUrl
    });
})(angular);
