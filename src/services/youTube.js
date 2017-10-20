angular.module('video-player')
.service('youTube', function(){
  // TODO
  this.search = function(){
    return $http({
      method:'GET',
      url:'https://www.googleapis.com/youtube/v3/search'
    })
  }


});
