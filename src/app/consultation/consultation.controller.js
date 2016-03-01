'use strict';

angular.module('health')
  .controller('ConsultationCtrl', function ($scope, doctorSvc, patientSvc) {
    init();

    function init() {
      $scope.professionalType = 'GP';
      patientSvc.getData()
        .then(function(response) {
          // console.log('patient', response);
          $scope.patient = response;
        })

      doctorSvc.getAll()
        .then(function(response) {
          // console.log('doctors', response);
          $scope.doctors = response;
        });
    }



  });
