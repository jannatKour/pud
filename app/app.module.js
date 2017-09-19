(function(){
  'use strict';
  
  angular
    .module('app', [
    'ui.router',
    'restangular',
    'ui.tinymce',
    'textAngular',
    'jqwidgets',
    'ckeditor'
  ])
    .config(homeConfig);
  
  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider', 'RestangularProvider'];
  
  function homeConfig($urlRouterProvider, $stateProvider, RestangularProvider){
    $urlRouterProvider
      .when('', '/editor');
    
    $stateProvider
    .state( 'editor',{
      url: '/editor',
      templateUrl: 'app/features/editor/editor.tpl.html',
      controller : 'EditorController as editor'
    });
    
    RestangularProvider.setBaseUrl('http://192.168.28.149:3000'); 
  }   
})();
