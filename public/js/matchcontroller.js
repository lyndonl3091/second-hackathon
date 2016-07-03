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

    if (res.data.length === 0) {
      swal("Sorry, forever alone")
    }
  })
  .catch(err => {
    console.err('err:', err)
  });
};


});
