angular
  .module('hsapp')
  .factory('counselFactory', counselFactory);

  function counselFactory($http, BASE_URL) {

    var fb = new Firebase(BASE_URL);
    var vm = this;

    findAll = function (cb) {
      $http
        .get(BASE_URL + '/counsel.json')
        .success(function (data) {
          cb(data);
        });
    };

  return {
    findAll: findAll
  };

}
