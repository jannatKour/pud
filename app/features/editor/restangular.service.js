(function(){
  'use strict';

  angular
    .module('app')
    .factory('restService', restService);

  restService.$inject = ['Restangular'];

  function restService(Restangular){
    return{
      getData : getData,
      postData : postData
    };

    function getData(){
      return Restangular.all('sample').getList();
    }

    function postData(data){
      return Restangular.all('samplePostData').post(data);
    }
  }
})();


