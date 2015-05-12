angular
  .module('hsapp')
  .controller('MedicalController', MedicalController);

function MedicalController($http, medicalFactory, $scope, BASE_URL) {
  var vm = this;

  vm.resource;
  vm.resourceAgencies = [];
  vm.tempAgenciesArray = [];

  medicalFactory.findAll(function (data) {

    vm.resourceAgencies = data;
    console.log(vm.resourceAgencies);
  });

}
