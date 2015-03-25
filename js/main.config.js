angular
  .module('hsapp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../html/home.html',
      })
      .when('/stage0', {
        templateUrl: '../html/stage0.html',
      })
    .otherwise({
      redirectTo: '/index.html'
    });
}
