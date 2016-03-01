'use strict';

angular.module('health')
  .directive('lFaces', function() {
    return {
      scope: {
        name: '=',
        image: '=',
        icon: "="
      },
      templateUrl: 'app/directives/faces.html',
      controller: FacesCtrl
    };
  });

  function FacesCtrl() {
  }
