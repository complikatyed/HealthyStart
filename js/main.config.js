angular
  .module('hsapp')
  .config(appConfig);

function appConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../html/home.html',
    })
    .when('/resources', {
      templateUrl: '../html/resources/resources.html',
      controller: 'ResourceController',
      controllerAs: 'resources'
    })
    .when('/describe', {
      templateUrl: '../html/resources/descriptions.html',
      controller: 'ResourceController',
      controllerAs: 'resources'
    })
    .when('/search', {
      templateUrl: '../html/search.html',
    })
    .when('/stage0', {
      templateUrl: '../html/stages/stage0.html',
    })
    .when('/stage1', {
      templateUrl: '../html/stages/stage1.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/stage2', {
      templateUrl: '../html/stages/stage2.html',
    })
    .when('/stage3', {
      templateUrl: '../html/stages/stage3.html',
    })
    .when('/stage4', {
      templateUrl: '../html/stages/stage4.html',
    })
    .when('/medical',{
      templateUrl: '../html/resources/medical.html',
    })
    .when('/clinics',{
      templateUrl: '../html/resources/mdh-clinics.html',
    })
    .when('/map',{
      templateUrl: '../html/resources/master-map.html',
    })
    .when('/terms', {
      templateUrl: '../html/terms.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  }
