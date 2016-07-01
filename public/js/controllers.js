'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function() {
  console.log('mainCtrl!');
});

// define $scope functions here
// bring in $localStorage if needed
// $scope.storage = $localStorage.$default({ set defaults})