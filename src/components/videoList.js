angular.module('video-player')
.component('videoList', {
  bindings:{
    videos: '<',
    video: '<',
    selectVideo: '<'
  },


  controller: function() {
    console.log("Video list: ", this);
    // this.selectVideo = function(){
    //   console.log('selectVideo ran')
    // };
  },




  template:
  `
  <ul class="video-list">
    <video-list-entry
    ng-repeat="video in $ctrl.videos"
    video = "video"
    select-video = "$ctrl.selectVideo"
    >
  </video-list-entry>

  </ul>
  `
});
