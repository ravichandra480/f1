(function (angular) {
    var templateUrl = 'components/footer/html/footer.html';

    angular.module('champions.footer', [
        templateUrl
    ])
    .value('$routerRootComponent', 'championsFooter')
    .component('championsFooter', {
        templateUrl: templateUrl
    });
})(angular);
