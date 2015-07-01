(function() {
  'use strict';
  angular.module('StarWars')

  .controller('FilmCtrl', ['$scope',

    function($scope) {
      $scope.people = [
        {
          name: 'Jean',
          location: 'Minneapolis'
        },
        {
          name: 'William',
          location: 'Dallas'
        },
        {
          name: 'Nick',
          location: 'Dunwoody'
        }
      ];
    }
  ]);
}());
