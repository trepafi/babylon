'use strict';


angular.module('health')
  .factory('doctorSvc', function($q, peopleSvc) {

    return {
      getAll: getAll
    };

    function getRandomType() {
      var types = ['GP', 'NU', 'TH', 'SP'];
      return types[Math.floor(Math.random() * types.length)];
    }

    function getAvailability() {
      var now = new Date();
      return Math.floor(now.getTime() + Math.random() * 100000000);
    }

    function getAll() {
      var qty = 5;
      var deferred = $q.defer();
      peopleSvc.getMany(qty)
        .then(function(response) {
          var doctors = [];
          _.forEach(response, function(item) {
            // doctors.push(_.extend(item, {
            //   type: getRandomType(),
            //   nextAvailable: getAvailability()
            // }))
            doctors.push({
              id: item.DNI,
              name: item.name,
              fullname: item.fullname,
              type: getRandomType(),
              nextAvailable: getAvailability(),
              gender: item.gender,
              email: item.email,
              phone: item.phone,
              picture: item.picture
            })
            // console.log(item);
          })
          deferred.resolve(doctors);
        })
      return deferred.promise;
    }



  });
