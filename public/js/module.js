'use strict';

var app = angular.module('myApp', ['ui.router', 'ngStorage'])


app.run(function(User) {
  User.getUser();
})


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeController'
    })
    .state('user', {
      url: '/user',
      templateUrl: '/html/user.html',
      controller: 'userController'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/html/login.html',
      controller: 'loginController'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/html/register.html',
      controller: 'registerController'
    })
    .state('match', {
      url: '/match',
      templateUrl: '/html/match.html',
      controller: 'matchController'
    })
    .state('questionnaire', {
      url: '/questionnaire',
      templateUrl: '/html/questionnaire.html',
      controller: 'questionnaireController'
    })

  $urlRouterProvider.otherwise('/');
})
