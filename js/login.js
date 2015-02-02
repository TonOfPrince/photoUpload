angular.module('wedPicsApp.login', [])

.controller('LoginCtrl', function($scope, $state, $q, Login, $cookieStore) {

  angular.extend($scope, Login);

  $scope.incorrectPass = false;

  $scope.checkPass = function() {
  	if ($scope.pass === Login.password) {
      $cookieStore.put("id", $scope.id);
      $state.go("upload");
      console.log("login successful");
    } else {
      $scope.flash = $scope.id;
      $scope.incorrectPass = true;
      console.log("unsuccessful login");
    }
  }
})

.factory('Login', function ($q, $rootScope, $state) {
	var password = "marriage"
  return {
    password: password
  }
});
