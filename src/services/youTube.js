angular.module('video-player')
.service('youTube', function($http){
  this.search = function(query, searchResults){
    console.log('youtube', searchResults);
    $http.get('https://www.googleapis.com/youtube/v3/search', {
       params: {
         key: window.YOUTUBE_API_KEY,
         type: 'video',
         maxResults: '5',
         part: 'snippet',
         q: query
       }
     })
     .then( function (data) {
       console.log('data', data.data)
       searchResults(data.data.items[0], data.data.items)
     },
      function () {
       console.log('Search error');
     });
  }//end this.search
});//end .service
