angular
  .module('hsapp')
  .controller('CrisisController', CrisisController);

function CrisisController($http, crisisFactory, $scope, BASE_URL) {
  var vm = this;

  vm.resource;
  vm.resourceAgencies = [];
  vm.tempAgenciesArray = [];

  crisisFactory.findAll(function (data) {

    vm.resourceAgencies = data;
    console.log(vm.resourceAgencies);
  });

}
