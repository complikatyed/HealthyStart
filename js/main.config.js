angular
  .module('hsapp')
  .config(appConfig);

function appConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../html/home.html',
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
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/stage3', {
      templateUrl: '../html/stages/stage3.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/stage4', {
      templateUrl: '../html/stages/stage4.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/resources', {
      templateUrl: '../html/fornow/resources.html',
      controller: 'ResourceController',
      controllerAs: 'resources'
    })
    .when('/describe', {
      templateUrl: '../html/fornow/descriptions.html',
      controller: 'ResourceController',
      controllerAs: 'resources'
    })
    .when('/tags', {
      templateUrl: '../html/fornow/tags.html',
      controller: 'ResourceController',
      controllerAs: 'resources'
    })
    .when('/school',{
      templateUrl: '../html/resources/education.html',
    })
    .when('/nutrition',{
      templateUrl: '../html/resources/nutrition.html',
    })
    .when('/medical',{
      templateUrl: '../html/resources/medical.html',
    })
    .when('/clinics',{
      templateUrl: '../html/resources/mdh-clinics.html',
    })
    .when('/homevisits',{
      templateUrl: '../html/resources/homevisits.html',
    })
    .when('/counsel',{
      templateUrl: '../html/resources/counseling.html',
    })
    .when('/mentor',{
      templateUrl: '../html/resources/mentoring.html',
    })
    .when('/parenting',{
      templateUrl: '../html/resources/parenting.html',
      controller: 'ParentController',
      controllerAs: 'resources'
    })
    .when('/paperwork',{
      templateUrl: '../html/resources/paperwork.html',
    })
    .when('/map',{
      templateUrl: '../html/resources/master-map.html',
    })
    .when('/crisis',{
      templateUrl: '../html/resources/crisis.html',
    })
    .when('/terms', {
      templateUrl: '../html/terms.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  }
