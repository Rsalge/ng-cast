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
  <form ng-submit="$ctrl.searchService.search(query, $ctrl.searchResults)" >
    <input class="form-control" ng-model="query" type="text" /><button class="btn" >
  </form>
    <span class="glyphicon glyphicon-search"></span>
  </button>
</div>
`



});
