'use strict';

angular.module('health')
  .controller('SelectDoctorCtrl', function SelectDoctorCtrl($scope, $mdDialog, doctors) {
    $scope.doctors = doctors;
    $scope.selectDoctor = function(doctor) {
      $mdDialog.hide(doctor);
    };
  })
  .controller('ConsultationCtrl', function ($scope, $mdDialog, $mdMedia, doctorSvc, patientSvc) {
    init();

    function init() {
      $scope.professionalType = 'GP';
      $scope.doctors = [];
      $scope.currentDoctor;
      $scope.nextAvailable;
      $scope.patient = {};

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

    $scope.setProfessionalType = function(type) {
      $scope.professionalType = type;
    };

    $scope.selectDoctor = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: 'SelectDoctorCtrl',
        templateUrl: 'app/components/dialogs/selectDoctor.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        locals: {
          doctors: $scope.doctors
        }
      })
      .then(function(doctor) {
        $scope.currentDoctor = doctor;
        $scope.nextAvailable = {
          text: moment(doctor.nextAvailable).fromNow(),
          format: moment(doctor.nextAvailable).format('ddd, MMMM Do YYYY, h:mm:ss a')
        }
      }, function() {

      });

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };







  });
