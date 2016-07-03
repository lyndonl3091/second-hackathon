'use strict';

angular.module('myApp')

.controller('userController', function($scope, User, $sessionStorage, $localStorage, $rootScope) {
  console.log('userController!');

  User.getUser();



  console.log('$rootScope.currentUser', $rootScope.currentUser);

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


})


.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});