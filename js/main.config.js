angular
  .module('bob')
  .config(bobConfig);

function bobConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../html/home.html',
    })
    .otherwise({
      redirectTo: '/'
    });
}
