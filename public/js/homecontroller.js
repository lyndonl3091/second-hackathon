'use strict';

angular.module('myApp')

.controller('homeController', function($scope, $state, $rootScope, $sessionStorage, User) {

  // $scope.currentUser = $sessionStorage.currentUser;


  console.log('$scope.currentUser', $scope.currentUser);
  // $sessionStorage


  $scope.userLogin = () => {
    console.log('$scope.userExisting', $scope.userExisting);
  User.login($scope.userExisting)
    .then(res => {
      console.log('res in userLogin:', res.config.data);
      User.getUser()
        .then(res => {
          console.log('res.token in userlogin', res.token);
        })
        .catch(err => {
          console.log('err', err);
        })

      $sessionStorage.currentUser = res.config.data;
      console.log('$sessionStorage.currentUser:', $sessionStorage.currentUser);
      $scope.currentUser = $sessionStorage.currentUser;
      $state.go('user');
    })
    .catch(err => {
      console.log('err:', err);
    })
    console.log('$scope.userExisting', $scope.userExisting);
  // User.getId($scope.userExisting)
  //   .then(res => {
  //     console.log('res in user.getId:', res);
  //     // $sessionStorage.currentUser._id
  //   })
  //   .catch(err => {
  //     console.log('err:', err);
  //   })
  }


  $scope.userSubmit = () => {
    $rootScope.user = $scope.user;
    console.log('$scope.user', $scope.user);
    User.register($scope.user)
      .then(res => {
        console.log('res:', res);
        User.login($scope.user)
          .then(res => {
            console.log('res:', res);
          })
          .catch(err => {
            console.log('err:', err);
          })
        $state.go('user');
      })
      .catch(err => {
        console.log('err:', err);
      })
  }

})
