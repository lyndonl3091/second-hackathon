'use strict';

angular.module('myApp')

.controller('matchController', function($scope) {
  
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
