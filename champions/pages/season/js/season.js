(function (angular) {
    var moduleName = 'champions.season';
    var componentName = 'seasonDetail';
    var templateUrl = 'pages/season/html/season.html';

    function SeasonDetailController(seasonService) {
        var $ctrl = this;
        this.$routerOnActivate = function (next, previous) {
            this.selectedYear = next.params.year;
            this.winner = next.params.winner;
            seasonService.getSeasons(next.params.year).then(function (seasonDetails) {
                $ctrl.races = seasonDetails.MRData.RaceTable.Races;
            }, function (error) {
                $ctrl.races = error.data;
            });
        };
    }
    SeasonDetailController.$inject = [
        'seasonService'
    ];

    function SeasonService($http, $q) {
        this.getSeasons = function (year) {
            return $http
                .get('http://ergast.com/api/f1/' + year + '/results/1.json')
                .then(function (res) {
                    if (res.data) {
                        return res.data;
                    }
                    return $q.reject(res);
                });
        };
    }

    SeasonService.$inject = [
        '$http',
        '$q'
    ];

    angular.module(moduleName, [
        templateUrl
    ])
    .value('$routerRootComponent', 'seasonDetail')
    .component(componentName, {
        templateUrl: templateUrl,
        controller: SeasonDetailController
    })
    .service('seasonService', SeasonService);
})(angular);
