'use strict';

angular.module('myApp')

.controller('matchController', function($scope, User) {
  
 $scope.logOut = () => {
  User.logout()
  .then(res => {
    console.log('res:', res);
  })
  .catch(err => {
    console.log('err in logoutcontroller:', err);
  })   
}
$scope.findMatch = () => {
  User.findMatch()
  .then(res => {
    $scope.matches = res.data;
    console.log("res.data:", res.data)
    console.log("$scope.matches:", $scope.matches)
  })
  .catch(err => {
    console.err('err:', err)
  });
};


});
