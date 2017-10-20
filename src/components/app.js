angular.module('video-player')

.component('app', {
  //TODO
  bindings:{

  },

  controller: function(){
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

    this.selectVideo = function(){

    };

    this.searchResults = function(){

    };




  },

   templateUrl: 'src/templates/app.html'

});//end component
