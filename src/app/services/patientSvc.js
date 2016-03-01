'use strict';


angular.module('health')
  .factory('patientSvc', function($q, peopleSvc) {

    return {
      getData: getPatient
    };

    function getRelationship() {
      var types = ['spouse', 'child', 'parent', 'other'];
      return types[Math.floor(Math.random() * types.length)];
    }

    function getPatient() {
      var deferred = $q.defer();
      peopleSvc.getMany(3)
        .then(function(response) {
          var relatives = [];
          _.forEach(response, function(item) {
            relatives.push({
              id: item.DNI,
              name: item.name,
              fullname: item.fullname,
              gender: item.gender,
              email: item.email,
              phone: item.phone,
              picture: item.picture
            });
          });

          var patient = _.extend(relatives[0], {
            relatives: _.slice(relatives, 1)
          })

          deferred.resolve(patient);
        });
        return deferred.promise;
    }
  });
