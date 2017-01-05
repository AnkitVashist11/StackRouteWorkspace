angular.module('instantsearch')

.controller('instantSearchCtrl', function($scope, $http) {
	$scope.s=function(key){
		$http.get("data.json").then(function(response) {
    	/*console.log(response);*/
         $scope.result = response.data.Search;
         console.log($scope.result);
       })
		
	};
});
    // $http.get("data.json").then(function(response) {
    // 	console.log(response);
    //     $scope.result = response.data;

    //   })
       /*$scope.title=['Title'];
       $scope.role=['role'];
       $scope.duties=['duties'];*/
       /*$scope.fun=function(key)
       {   $scope.value=true;
           $scope.movieTitle=key['Title'];
           $scope.movieYear = key['Year'];
           $scope.moviePoster=key['Poster'];
          
       }*/
  //   };
    
  // });


/*UI-routting*/
/*.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            views:{
              'content@':{templateUrl: './jobSearch.html',
                          controller:'./instantSearchCtrl'}
            }
                  
        })
        .state('/result',{
        	url:'/result',
        	views:{
        		'content@':{templateUrl:'./view2.html'}


        		}
        	}
        })

 */