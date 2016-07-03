'use strict';

angular.module('myApp')

.controller('questionnaireController', function($scope, User, $sessionStorage, $state, $rootScope, $localStorage) {


  console.log('sessionStorage', $sessionStorage.currentUser);

  // console.log('sessionStorage:', )
  console.log('questionnaireController!');
  $scope.genders = {
    options: [
      'Female',
      'Male'
    ]
  }

  $scope.interests = {
    options: [
      'Outdoor sports',
      'Literature',
      'Art',
      'Programming'
    ]
  }

  $scope.hobbies = {
    options: [
      'Running',
      'Singing',
      'Dancing',
      'Rock climbing',
      'Reading/writing'
    ]
  }

  $scope.foods = {
    options: [
      'Korean',
      'Chinese',
      'American',
      'Mexican',
      'Indian',
      'Japanese',
      'Italian'
    ]
  }

  $scope.colors = {
    options: [
      'Blue',
      'Red',
      'Yellow',
      'Purple',
      'Green',
      'Black'
    ]
  }

  $scope.drinks = {
    options: [
      'Wine',
      'Beer',
      'Vodka',
      'Whiskey',
      'Rum',
      'Soju'
    ]
  }

  $scope.dayOrNight = {
    options: [
      'Day',
      'Night'
    ]
  }

  $scope.pokemons = {
    options: [
      'Charmander',
      'Squirtle',
      'Bulbasaur'
    ]
  }

  $scope.mean = {
    options: [
      'MongoDB',
      'Express',
      'AngularJS',
      'Node.js'
    ]
  }

  $scope.socialMedia = {
    options: [
      'Facebook',
      'Instagram',
      'Twitter',
      'Snapchat',
      'Vine'
    ]
  }

  $scope.personalities = {
    options: [
      'Extrovert',
      'Introvert',
      'Ambivert'
    ]
  }

  $scope.teaOrCoffee = {
    options: [
      'Tea',
      'Coffee'
    ]
  }

  $scope.phones = {
    options: [
      'Android',
      'iOS'
    ]
  }

  $scope.movies = {
    options: [
      'Comedy',
      'Romance',
      'Horror',
      'Drama',
      'Animation',
      'Suspense',
      'Sci-Fi'
    ]
  }

  $scope.musics = {
    options: [
      'EDM',
      'Trap',
      'Country',
      'Rock',
      'Pop',
      'Hip Hop',
      'R&B'
    ]
  }

  $scope.steaks = {
    options: [
      'Well done',
      'Medium well',
      'Medium',
      'Medium rare',
      'Rare',
      'None'
    ]
  }

  $scope.famous = {
    options: [
      'Yes',
      'No'
    ]
  }

  $scope.continents = {
    options: [
      'North America',
      'South America',
      'Africa',
      'Asia',
      'Europe',
      'Australia',
      'Antarctica'
    ]
  }

  $scope.crimes = {
    options: [
      'Murder',
      'Grand theft',
      'Drugs',
      'Vandalism',
      'Growing weed'
    ]
  }

  $scope.userSubmit = () => {

    console.log('$scope.user:', $scope.user);
    User.add($scope.user)

      .then(res => {
        console.log('res:', res);
      })
      .catch(err => {
        console.log('err:', err);
      })
    console.log('$scope.user', $scope.user);
    User.getUser();
    console.log('$scope.user', $scope.currentUser);
    $state.go('user');
  }

  $scope.removeQuestionnaire = () => {
    $scope.currentUser = null;
    $state.go('user');

  }


})
