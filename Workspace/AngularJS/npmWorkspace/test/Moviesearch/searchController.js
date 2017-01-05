angular.module('movieSearching',['ngMaterial','ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views:{
              'content@':{templateUrl: './home.html'}
            }
                  
        })

        .state('about', {
            url: '/about',
            views: {
               'content@': {templateUrl: './about.html'}
          }
        })
        .state('search', {
            url: '/search',
            views:{
               'content@':{templateUrl:'./search.html',
                           controller:'searchingController'
                           }
           }
           
        })

        .state('movie',{
            url:'/movie/:movieTitle',
            views:{
              'content@': {templateUrl:'./movie.html',controller:'searchingController'}
                  },       
            })
        })

      
   .controller('searchingController', ["$scope","$http",function($scope,$http) {
       $scope.value=false;
       var pageNo=1;
       $scope.fun=function(key)
       {   $scope.value=true;
           $scope.movieTitle=key['Title'];
           $scope.movieYear = key['Year'];
           $scope.moviePoster=key['Poster'];
          /* $state.go("",obj)*/
       }
     
       $scope.searchKeyword=function()
       {
          var request={
              method: 'GET',
                url: "http://www.omdbapi.com/?s="+$scope.keyword+"&page="+pageNo
          }
          $http(request).then(function(response){
              $scope.data=response.data;
          })
         }
   }]);

   /*angular.module("movieSearch",['ngMaterial']);*/

    /*var tem=$scope.keyword;*/
     /* $scope.mo="not working";*/
       /*$scope.fun=function()
       {
           $scope.mo="working";
       }*/

       