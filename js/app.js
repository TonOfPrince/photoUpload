var wedPics = angular.module('wedPicsApp',
  ['ui.router',
   'ngCookies',
   'wedPicsApp.display',
   'wedPicsApp.login',
   'wedPicsApp.upload'
  ])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
    })
    .state('upload', {
        url: '/upload/:error',
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl'
    })
    .state('display', {
        url: '/display/:type/:name',
        templateUrl: 'views/display.html',
        controller: 'DisplayCtrl'
    })
});
