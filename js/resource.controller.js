angular
  .module('hsapp')
  .controller('ResourceController', ResourceController);

function ResourceController($http, resourceFactory, $scope, BASE_URL) {
  var vm = this;

  vm.resource;
  vm.resourceAgencies = [];
  vm.tempAgenciesArray = [];

  resourceFactory.findAll(function (data) {

    vm.resourceAgencies = data;
    console.log(vm.resourceAgencies);
  });

}
