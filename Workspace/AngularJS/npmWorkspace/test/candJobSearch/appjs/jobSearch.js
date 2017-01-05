angular.module('instantsearch',['ngMaterial','ui.router'])


/* creating component for job search*/
   .component("jobSearch",{
   	templateUrl:'/templates/jobSearch.html',
   	// bindings:{
   	// 	name :"=",
   	// 	txt:'@'
   	// },
   	// controller:function()
   	// {
   	// 	this.searchString="Value changed";
   	// 	this.ankit="my name is ankit";
   	// }
   })
   /*.controller('instantSearchCtrl', function($scope, $http) {
    $http.get("data.json")
    .then(function(response) {
        $scope.message = response;
    });
    
  });*/