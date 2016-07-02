'use strict';

angular.module('myApp')

.service('User', function($http, $q) {

  // set user equal to one person's profile... based on cookies/tokens 


  // get user by id
  this.load = id => {

  }


  // edit user
  this.edit = id => {

  }

  // delete user
  this.delete = id => {

  }

  this.add = id => {
    
  }

  this.login = userObj => $http.post('/api/users/login', userObj);

  this.register = userObj => $http.post('/api/users/register', userObj);


})

.service('Match', function($http, $q) {

  this.getOne = id => {

  }

  this.getAll = () => {

  }

  this.removeOne = id => {

  }

  this.removeAll = () => {

  }


})

