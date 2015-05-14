angular
  .module('hsapp')
  .config(appConfig);

function appConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../html/home.html',
    })
    .when('/stage0', {
      templateUrl: '../html/stages/stage0.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/stage1', {
      templateUrl: '../html/stages/stage1.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/stage2', {
      templateUrl: '../html/stages/stage2.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/stage3', {
      templateUrl: '../html/stages/stage3.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/stage4', {
      templateUrl: '../html/stages/stage4.html',
      controller: 'ShowController',
      controllerAs: 'hsapp'
    })
    .when('/describe', {
      templateUrl: '../html/fornow/descriptions.html',
      controller: 'ResourceController',
      controllerAs: 'resources'
    })
    .when('/school',{
      templateUrl: '../html/resources/education.html',
    })
    .when('/medical',{
      templateUrl: '../html/resources/medical.html',
      controller: 'MedicalController',
      controllerAs: 'resources'
    })
    .when('/clinics',{
      templateUrl: '../html/resources/mdh-clinics.html',
    })
    .when('/homevisits',{
      templateUrl: '../html/resources/homevisits.html',
      controller: 'VisitController',
      controllerAs: 'resources'
    })
    .when('/counsel',{
      templateUrl: '../html/resources/counseling.html',
      controller: 'CounselController',
      controllerAs: 'resources'
    })
    .when('/parenting',{
      templateUrl: '../html/resources/parenting.html',
      controller: 'ParentController',
      controllerAs: 'resources'
    })
    .when('/mentor',{
      templateUrl: '../html/resources/mentoring.html',
      controller: 'MentorController',
      controllerAs: 'resources'
    })
    .when('/paperwork',{
      templateUrl: '../html/resources/paperwork.html',
      controller: 'PaperworkController',
      controllerAs: 'resources'
    })
    .when('/resources', {
      templateUrl: '../html/resources/resources.html',
      controller: 'ResourceController',
      controllerAs: 'resources'
    })
    .when('/crisis',{
      templateUrl: '../html/resources/crisis.html',
      controller: 'CrisisController',
      controllerAs: 'resources'
    })
    .when('/terms', {
      templateUrl: '../html/terms.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  }
