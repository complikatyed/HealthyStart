angular
  .module('hsapp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../html/home.html',
      })
      // //.when('/stages', {
      //   templateUrl: '../html/stages/stages.html',
      //   controller: 'MyController',
      //   controllerAs: 'hsapp'
      //})
      .when('/resources', {
        templateUrl: '../html/resources.html',
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
      .when('/terms', {
        templateUrl: '../html/terms.html',
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .controller('ShowController', function($scope) {
    $scope.toggle = false;
    $scope.clickMe = function(e) {
      $scope.toggle = !$scope.toggle;
    };
  })
  .controller('MyController', function($scope) {
      $scope.myData = {};
      $scope.myData.mouseOver = function(e) {
          alert('clicked');
      };
  });
