angular
  .module('hsapp')
  .factory('parentFactory', parentFactory);

  function parentFactory($http, BASE_URL) {

    var fb = new Firebase(BASE_URL);
    var vm = this;

    findAll = function (cb) {
      $http
        .get(BASE_URL + '/parenting.json')
        .success(function (data) {
          cb(data);
        });
    };

  return {
    findAll: findAll
  };

}
