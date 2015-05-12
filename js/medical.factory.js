angular
  .module('hsapp')
  .factory('medicalFactory', medicalFactory);

  function medicalFactory($http, BASE_URL) {

    var fb = new Firebase(BASE_URL);
    var vm = this;

    findAll = function (cb) {
      $http
        .get(BASE_URL + '/medical.json')
        .success(function (data) {
          cb(data);
        });
    };

  return {
    findAll: findAll
  };

}
