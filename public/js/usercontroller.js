'use strict';

angular.module('myApp')

.controller('userController', function($scope, User, $sessionStorage, $localStorage) {
  console.log('userController!');

  $scope.storage = $localStorage.$default({
    individuals: User.Individual || []
  })


  console.log('$scope.storage.individuals', $scope.storage.individuals);

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

