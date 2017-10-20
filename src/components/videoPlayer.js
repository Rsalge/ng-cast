angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    console.log("Video player: ", this);
    this.getUrl = function() {
      return  this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : ''
    }
  },

  bindings:{
      video: '<'
  },




  template: `
  <div class="video-player">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" ng-src="{{$ctrl.getUrl()}}" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{$ctrl.video.snippet.title}}</h3>
      <div>{{$ctrl.video.snippet.description}}</div>
    </div>
  </div>`
});
