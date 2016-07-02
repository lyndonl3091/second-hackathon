'use strict';

angular.module('myApp')

.controller('userController', function($scope, User, $sessionStorage, $localStorage) {
  console.log('userController!');

  User.getUser();

  $scope.user = $scope.currentUser;
  console.log('$scope.user in usercontroller:', $scope.user);



  // console.log('$scope.user,' $scope.user);

  $scope.logOut = () => {
    User.logout()
        .then(res => {
          console.log('res:', res);
        })
        .catch(err => {
          console.log('err in logoutcontroller:', err);
        })   
  }

});

