angular.module('video-player')

.component('search', {
  // TODO
  bindings:{
    searchService: '<',
    searchResults: '<'
   },


  controller: function(){
    console.log('searchservice: ',window);
    this.result = function(){
    }


  },




template: `
<div class="search-bar form-inline">
  <input class="form-control" ng-model="query" type="text" />
  <button class="btn" ng-click="$ctrl.searchService.search(query, $ctrl.searchResults)">
    <span class="glyphicon glyphicon-search"></span>
  </button>
</div>
`



});
