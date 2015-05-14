angular
  .module('hsapp')
  .controller('ShowController', function($scope) {
      $scope.toggle = false;
    $scope.clickMe = function(e) {
      $scope.toggle = !$scope.toggle;
    };
});
