(function(){
  'use strict';

  angular
    .module('app')
    .factory('editorService', editorService);

  editorService.$inject = [];

  function editorService(){
    var content; 
    return{
      setContent: setContent,
      getContent: getContent
    };
 
    function setContent(data){
      localStorage.setItem('content', data);
    }
    
    function getContent(){
      localStorage.getItem('content');
    }
   
  }
})();