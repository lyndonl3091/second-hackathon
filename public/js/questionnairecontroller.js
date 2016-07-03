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


    let newObj = {
      username: $rootScope.currentUser.username,
      password: $rootScope.currentUser.password,
      gender: $scope.user.genders.selected,
      interest: $scope.user.interests.selected,
      hobbies: $scope.user.hobbies.selected,
      food: $scope.user.foods.selected,
      color: $scope.user.colors.selected,
      drink: $scope.user.drinks.selected,
      dayOrNight: $scope.user.dayOrNight.selected,
      pokemon: $scope.user.pokemons.selected,
      mean: $scope.user.mean.selected,
      socialMedia: $scope.user.socialMedia.selected,
      personality: $scope.user.personalities.selected,
      teaOrCoffee: $scope.user.teaOrCoffee.selected,
      phone: $scope.user.phones.selected,
      movie: $scope.user.movies.selected,
      music: $scope.user.musics.selected,
      steak: $scope.user.steaks.selected,
      famous: $scope.user.famous.selected,
      continent: $scope.user.continents.selected,
      crime: $scope.user.crimes.selected 
    }


  console.log('$scope.user in usersubmit:', $scope.user);
    console.log('$rootScope.currentUser._id:', $rootScope.currentUser._id);

    User.add($rootScope.currentUser._id, newObj)
      .then(res => {
        console.log('res:', res);

  // console.log('$scope.user in usersubmit:', $scope.user);
  //   $rootScope.currentUser.user = $scope.user;
  //   console.log('$rootScope.currentUser._id:', $rootScope.currentUser._id);
  //   User.add($rootScope.currentUser._id, $rootScope.currentUser.user)
  //     .then(res => {
  //       console.log('res in usersubmit:', res);
        // User.getUser()
        // .then(res => {
        //   $rootScope.currentUser.user = res.data;
        // })
        // .catch(err => {
        //   console.log('err:', err);
        // })
        // User.getItems()
        //   .then(res => {
        //     console.log('res in usersubmit embed:', res.data);
        //   })
        //   .catch(err => {
        //     console.log('err:', err);
        //   })


      })
      .catch(err => {
        console.log('err:', err);
      })


    // User.getUser();




    // console.log('$scope.user:', $scope.user);
    // User.add($scope.user)

    //   .then(res => {
    //     console.log('res:', res);
    //   })
    //   .catch(err => {
    //     console.log('err:', err);
    //   })
    // console.log('$scope.user', $scope.user);
    // User.getUser();
    // console.log('$scope.user', $scope.currentUser);

    $state.go('user');
  }

  $scope.removeQuestionnaire = () => {
    $scope.currentUser = null;
    $state.go('user');

  }


})
