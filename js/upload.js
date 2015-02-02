angular.module('wedPicsApp.upload', [])

.controller('UploadCtrl', function($scope, $state, $cookieStore) {

  if (!$cookieStore.get("id")) {
    $state.go("login");
  }
  $scope.tooBig = false;
  $scope.wrongType = false;
  if ($state.params.error === "size") {
    $scope.tooBig = true;
  }
  if ($state.params.error === "type") {
    $scope.wrongType = true;
  }
  $scope.id = $cookieStore.get("id");
});
