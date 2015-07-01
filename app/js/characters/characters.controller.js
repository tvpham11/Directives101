;(function () {

  'use strict';

  angular.module('StarWars')

  .controller('CharCtrl', ['$scope', '$http',

    function($scope, $http) {

      $http.get('http://swapi.co/api/people')
        .success(function(data) {
          $scope.people = data.results;
        });

      $scope.findFilm = function(url) {
        $http.get(url).success(function (data) {
          console.log(data);
          $scope.film = data;
        });
      };
    }
  ]);

}());
