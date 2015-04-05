angular
  .module('hsapp')
  .factory('resourceFactory', resourceFactory);

  function resourceFactory($http, BASE_URL) {

    var fb = new Firebase(BASE_URL);
    var vm = this;

    findAll = function (cb) {
      $http
        .get(BASE_URL + '/resources.json')
        .success(function (data) {
          cb(data);
        });
    };

  return {
    findAll: findAll
  };

}
