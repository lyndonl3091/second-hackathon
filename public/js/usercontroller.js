'use strict';

angular.module('myApp')

.controller('userController', function($scope, User, $sessionStorage, $localStorage, $rootScope) {
  console.log('userController!');

  User.getUser();


  // console.log('$scope.user,' $scope.user);

  $scope.logOut = () => {
    User.logout()
        .then(res => {
        })
        .catch(err => {
          swal("Error logging out")
        });
  };


});


.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});
