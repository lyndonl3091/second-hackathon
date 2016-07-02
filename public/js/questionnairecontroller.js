'use strict';

angular.module('myApp')

.controller('questionnaireController', function($scope, User) {
  console.log('questionnaireController!');
  $scope.genders = {
    options: [
      'Female',
      'Male'
    ],
    selected: ''
  }

  $scope.interests = {
    options: [
      'Outdoor sports',
      'Literature',
      'Art',
      'Programming'
    ],
    selected: ''
  }

  $scope.hobbies = {
    options: [
      'Running',
      'Singing',
      'Dancing',
      'Rock climbing',
      'Reading/writing'
    ],
    selected: ''
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
    ],
    selected: ''
  }

  $scope.colors = {
    options: [
      'Blue',
      'Red',
      'Yellow',
      'Purple',
      'Green',
      'Black'
    ],
    selected: ''
  }

  $scope.drinks = {
    options: [
      'Wine',
      'Beer',
      'Vodka',
      'Whiskey',
      'Rum',
      'Soju'
    ],
    selected: ''
  }

  $scope.dayOrNight = {
    options: [
      'Day',
      'Night'
    ],
    selected: ''
  }

  $scope.pokemons = {
    options: [
      'Charmander',
      'Squirtle',
      'Bulbasaur'
    ],
    selected: ''
  }

  $scope.mean = {
    options: [
      'MongoDB',
      'Express',
      'AngularJS',
      'Node.js'
    ],
    selected: ''
  }

  $scope.socialMedia = {
    options: [
      'Facebook',
      'Instagram',
      'Twitter',
      'Snapchat',
      'Vine'
    ],
    selected: ''
  }

  $scope.personalities = {
    options: [
      'Extrovert',
      'Introvert',
      'Ambivert'
    ],
    selected: ''
  }

  $scope.teaOrCoffee = {
    options: [
      'Tea',
      'Coffee'
    ],
    selected: ''
  }

  $scope.phones = {
    options: [
      'Android',
      'iOS'
    ],
    selected: ''
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
    ],
    selected: ''
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
    ],
    selected: ''
  }

  $scope.steaks = {
    options: [
      'Well done',
      'Medium well',
      'Medium',
      'Medium rare',
      'Rare',
      'None'
    ],
    selected: ''
  }

  $scope.famous = {
    options: [
      'Yes',
      'No'
    ],
    selected: ''
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
    ],
    selected: ''
  }

  $scope.crimes = {
    options: [
      'Murder',
      'Grand theft',
      'Drugs',
      'Vandalism',
      'Growing weed'
    ],
    selected: ''
  }

  $scope.userSubmit = () => {
    User.add($scope.user)
    console.log('$scope.user', $scope.user)
  }


})