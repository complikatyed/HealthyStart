angular
  .module('hsapp')
  .controller('PaperworkController', PaperworkController);

function PaperworkController($http, paperworkFactory, $scope, BASE_URL) {
  var vm = this;

  vm.resource;
  vm.resourceAgencies = [];
  vm.tempAgenciesArray = [];

  paperworkFactory.findAll(function (data) {

    vm.resourceAgencies = data;
    console.log(vm.resourceAgencies);
  });

}
