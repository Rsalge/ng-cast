angular.module('video-player')

.component('app', {

  bindings:{

  },

  controller: function(youTube){
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

    this.selectVideo = (index) => {
      console.log('selectVideo ran', this)
      console.log("selected video index", index)
      this.currentVideo = window.exampleVideoData[index]
    };

    this.searchResults = (currentVideo, videos) => {
      this.currentVideo = currentVideo
      this.videos = videos
    };

    this.searchService = youTube;



  },

   template:`
   <div id="app container">
     <nav class="navbar">
       <div class="col-md-6 col-md-offset-3">
         <search search-service="$ctrl.searchService" search-results="$ctrl.searchResults"><h5><em>search</em> component goes here</h5></search>
       </div>
     </nav>
     <div class="row">
       <div class="col-md-7">
         <video-player
         video="$ctrl.currentVideo"
         ></video-player>
       </div>
       <div class="col-md-5">
         <video-list
         select-video="$ctrl.selectVideo"
         videos="$ctrl.videos"></video-list
         >
       </div>
     <div>
   </div>
`
});//end component
