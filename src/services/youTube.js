angular.module('video-player')
.service('youTube', function(){
  // TODO
  this.search = function($http){
    return $http({
      method:'GET',
      url:'https://www.googleapis.com/youtube/v3/search'
      params: 'limit=5', sort_by={{$ctrl.searchText}}
    }).success(function(data){
      return data
    }).error(function(){
      alert('error');
    })
  }


});
