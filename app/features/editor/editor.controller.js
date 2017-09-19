(function(){
  'use strict';

  angular 
    .module('app')
    .controller('EditorController', EditorController);

  EditorController.$inject = ['editorService', 'restService'];

  function EditorController(editorService, restService){
    var vm = this;
    vm.tinymceModel = [];
    
    // Editor options
    vm.tinymceOptions = {
      selector: 'textarea',
      height: 310,
      plugins: 'link image imagetools code media codesample textcolor colorpicker table emoticons insertdatetime autosave spellchecker',
      toolbar1: 'undo redo | bold italic underline | alignleft aligncenter alignright | forecolor backcolor | emoticons | spellchecker',
      toolbar2: 'code link image | media codesample| table | insertdatetime | autosave',
      skin: 'lightgray',
      theme : 'modern',
      resize: 'both'
    };
    
    // Save button function
    vm.postContent = function() {
      restService.getData().then(function(){
        console.log('Editor content:', vm.tinymceModel);
        editorService.setContent(vm.tinymceModel);
        vm.textModel = vm.tinymceModel;
        restService.postData({data:vm.tinymceModel});
      });
    };
  }
})();