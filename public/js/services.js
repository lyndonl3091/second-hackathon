'use strict';

angular.module('myApp')

.service('User', function($http, $q, $rootScope) {

  this.login = userObj => $http.post('/api/users/login', userObj);

  this.register = userObj => $http.post('/api/users/register', userObj);


  // get user by id
  this.load = id => {

  }

  this.getUser = () => $http.get('/api/users/getUser')
    .then(res => {
      this.self = res.data;
      $rootScope.currentUser = res.data;
      return $q.resolve(res);
    });


  // edit user
  this.edit = id => {

  }

  // delete user
  this.delete = id => {

  }

  this.add = user => $http.put('/api/users/question', user);

  this.logout = () => $http.post('/api/users/logout');

  this.getId = userObj => $http.post('/api/users/loginnow')


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
