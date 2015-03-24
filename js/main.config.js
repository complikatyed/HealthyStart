angular
  .module('future')
  .config(futureConfig);

////
function futureConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/future/home.html',
    })

    .otherwise({
      redirectTo: '/'
    });
 }

 // .when('/tas/new', {
 //   templateUrl: 'js/tas/form.html',
 //   controller: 'TasController',
 //   controllerAs: 'tas'  // is equal to 'vm'
 // })
 // .when('/tas/:uuid', {  // the colon is there to show that it's a dynamic route
 //   templateUrl: 'js/tas/show.html',
 //   controller: 'ShowController',
 //   controllerAs: 'show'  // is equal to 'vm'  (see % note below )
 // })
 // .when('/tas/:uuid/edit', {
 //   templateUrl: 'js/tas/form.html',
 //   controller: 'EditController',
 //   controllerAs: 'tas'
 // })
