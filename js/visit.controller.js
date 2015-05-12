angular
  .module('hsapp')
  .controller('VisitController', VisitController);

function VisitController($http, visitFactory, $scope, BASE_URL) {
  var vm = this;

  vm.resource;
  vm.resourceAgencies = [];
  vm.tempAgenciesArray = [];

  visitFactory.findAll(function (data) {

    vm.resourceAgencies = data;
    console.log(vm.resourceAgencies);
  });

}
