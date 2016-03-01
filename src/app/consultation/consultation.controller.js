'use strict';

angular.module('health')
  .controller('ConsultationCtrl', function ($scope) {


    $scope.patient = {
      name: "Lubert",
      pic: "lubert.jpg",
      relatives: [
        {
          name: "Arianna",
          pic: 'arianna.jpg'
        }
      ]
    };

  });
