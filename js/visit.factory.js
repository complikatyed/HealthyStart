angular
  .module('hsapp')
  .factory('visitFactory', visitFactory);

  function visitFactory($http, BASE_URL) {

    var fb = new Firebase(BASE_URL);
    var vm = this;

    findAll = function (cb) {
      $http
        .get(BASE_URL + '/homevisit.json')
        .success(function (data) {
          cb(data);
        });
    };

  return {
    findAll: findAll
  };

}
