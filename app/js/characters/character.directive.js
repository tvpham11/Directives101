(function() {
  'use strict';

  angular.module('StarWars')

  .directive('swFirst', [

    function() {

      return {
        restrict: 'EA',
        templateUrl: 'js/templates/card.tpl.html',
        scope: {
          person: '='
        },
        replace: true
      };
    }
    
  ]);

}());
