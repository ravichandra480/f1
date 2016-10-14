angular.module("components/header/html/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/header/html/header.html",
    "<div class=\"header--title\"><a ng-link=\"['Home']\"><h1>F1 Champions [2015 - 2005]</h1></a></div>");
}]);
