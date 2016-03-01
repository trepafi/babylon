'use strict';


angular.module('health')
  .factory('peopleSvc', function($http, $q) {

    return {
      getOne: getPerson,
      getMany: getMany
    };

    function getPerson() {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'https://randomuser.me/api/'
      }).then(function(response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    function getMany(qty) {
      var deferred = $q.defer();
      var people = [];
      qty = qty || 2;

      for(var i = 0; i < qty; i++) {
        people.push(getPerson());
      };


      $q.all(people)
        .then(function(response) {
          var res = [];
          _.forEach(response, function(item) {
            var it = item.data.results[0].user;
            res.push(_.extend(it, {
              fullname: it.name.title + ' ' + it.name.first + ' ' + it.name.last
            }));

          });

          console.log('res', res);
          deferred.resolve(res);
        })

      return deferred.promise;
    }

  });
