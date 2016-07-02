'use strict';

angular.module('myApp')

.controller('homeController', function($scope, $state, $rootScope, $sessionStorage, User) {

  $scope.currentUser = $sessionStorage.currentUser;
  console.log('$scope.currentUser', $scope.currentUser);
  // $sessionStorage

  console.log('homeController!');
    $scope.type = {
    options: [
      'Female',
      'Male'
    ],
    selected: ''
  }


  $scope.userLogin = () => {
    console.log('$scope.userExisting', $scope.userExisting);
    User.login($scope.userExisting)
      .then(res => {
        console.log('res in userLogin:', res.config.data);
        User.getUser()
          .then(res => {
            console.log('res', res);
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
  }



})




