angular.module('video-player')
.component('videoListEntry', {
  controller: function() {
    console.log("Video list entry: ", this);
  },

  bindings:{
      video: '<'
  },





  template:`
  <li class="video-list-entry media">
    <div class="media-left">
      <img class="media-object" src={{$ctrl.video.snippet.thumbnails.default.url}} />
    </div>
    <div class="media-body">
      <div class="video-list-entry-title">{{$ctrl.video.snippet.title}}</div>
      <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
    </div>
  </li>
`
});
