angular.module('wedPicsApp.display', [])

.controller('DisplayCtrl', function($scope, $state, $cookieStore) {
  if (!$cookieStore.get("id")) {
    $state.go("login");
  }
  $scope.id = $cookieStore.get("id");
  $scope.clicked = false;
  $scope.photoID = $state.params.name;
  $scope.type = $state.params.type;
  $scope.fullScreen = function() {
  	$scope.clicked = !$scope.clicked;
  }

});
