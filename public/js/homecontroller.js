'use strict';

angular.module('myApp')

.controller('homeController', function($scope) {
  console.log('homeController!');
    $scope.type = {
    options: [
      'Female',
      'Male'
    ],
    selected: ''
  }



})



.controller('registerController', function() {
  console.log('registerController!');
})



.controller('loginController', function() {
  console.log('loginController!');
})


