angular.module('video-player')
.component('videoList', {
  controller: function() {
    console.log("Video list: ", this);
  },

  bindings:{
      videos: '<'
  },



  template:
  `
  <ul class="video-list">
    <video-list-entry
    ng-repeat="video in $ctrl.videos"
    video = "video"
    >
  </video-list-entry>

  </ul>
  `
});
