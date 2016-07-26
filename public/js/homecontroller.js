'use strict';

angular.module('myApp')

.controller('homeController', function($scope, $state, $rootScope, $sessionStorage, User) {

  $scope.userLogin = () => {
  User.login($scope.userExisting)
    .then(res => {
      User.getUser()
        .then(res => {
        })
        .catch(err => {
          swal("Invalid username or password")
        })

      $sessionStorage.currentUser = res.config.data;
      $scope.currentUser = $sessionStorage.currentUser;
      $state.go('user');
    })
    .catch(err => {
      swal("Invalid username or password")
    })
  }


  $scope.userSubmit = () => {
    $rootScope.user = $scope.user;
    User.register($scope.user)
      .then(res => {
        User.login($scope.user)
          .then(res => {
          })
          .catch(err => {
            swal("Username is taken")
          })
        $state.go('user');
      })
      .catch(err => {
        swal("Username is taken")
      })
  }

})
