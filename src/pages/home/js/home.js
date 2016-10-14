(function (angular) {
    var moduleName = 'champions.home';
    var componentName = 'championsHome';
    var templateUrl = 'pages/home/html/home.html';

    function ChampionsHomeController(championsObject) {
        var $ctrl = this;
        championsObject.then(function (champions) {
            $ctrl.champions = champions.MRData.StandingsTable.StandingsLists;
            console.log($ctrl.champions);
        }, function (error) {
            $ctrl.champions = error.data;
        });
    }
    ChampionsHomeController.$inject = [
        'championsObject'
    ];

    function ChampionsObject (championsService) {
        return championsService;
    }

    ChampionsObject.$inject = [
        'championsService'
    ];

    function ChampionsService($http, $q) {
        return $http
            .get('http://ergast.com/api/f1/driverStandings/1.json?offset=55')
            .then(function (res) {
                if (res.data) {
                    return res.data;
                }
                return $q.reject(res);
            });
    }

    ChampionsService.$inject = [
        '$http',
        '$q'
    ];

    angular.module(moduleName, [
        templateUrl
    ])
    .value('$routerRootComponent', 'championsHome')
    .component(componentName, {
        templateUrl: templateUrl,
        controller: ChampionsHomeController
    })
    .factory('championsObject', ChampionsObject)
    .service('championsService', ChampionsService);
})(angular);
