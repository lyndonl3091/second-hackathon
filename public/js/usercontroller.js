'use strict';

angular.module('myApp')

.controller('userController', function($scope, User, $sessionStorage, $localStorage, $rootScope) {
  console.log('userController!');

  User.getUser();

  // $scope.user = $rootScope.currentUser;

  // $scope.lists = $rootScope.currentUser.user || [];
 

  console.log('$rootScope.currentUser', $rootScope.currentUser);
  console.log('$scope.lists', $scope.lists);

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

