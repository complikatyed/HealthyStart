angular
  .module('hsapp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../html/home.html',
      })
      .when('/stages', {
        templateUrl: '../html/stages.html',
      })
      .when('/resources', {
        templateUrl: '../html/resources.html',
      })
      .when('/search', {
        templateUrl: '../html/search.html',
      })
      .when('/stage0', {
        templateUrl: '../html/stage0.html',
      })
      .when('/stage1', {
        templateUrl: '../html/stage1.html',
        controller: 'ShowController',
        controllerAs: 'hsapp'
      })
      .when('/stage2', {
        templateUrl: '../html/stage2.html',
      })
      .when('/stage3', {
        templateUrl: '../html/stage3.html',
      })
      .when('/stage4', {
        templateUrl: '../html/stage4.html',
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .controller('ShowController', function($scope) {
    $scope.toggle = false;
    $scope.clickMe = function(e) {
      $scope.toggle = !$scope.toggle;
      console.log("Click");
  };
});
