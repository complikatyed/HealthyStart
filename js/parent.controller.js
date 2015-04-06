angular
  .module('hsapp')
  .controller('ParentController', ParentController);

function ParentController($http, parentFactory, $scope, BASE_URL) {
  var vm = this;

  vm.resource;
  vm.resourceAgencies = [];
  vm.tempAgenciesArray = [];

  parentFactory.findAll(function (data) {

    vm.resourceAgencies = data;
    console.log(vm.resourceAgencies);
  });

}
