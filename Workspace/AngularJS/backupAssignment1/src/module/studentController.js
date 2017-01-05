var mainApp = angular.module("mainApp", []);
mainApp.controller("studentController", function($scope) {
   $scope.student = {
      firstName: "Ankit",
      lastName: "Vashist",
      fees:500,
      
      subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65},
         {name:'English',marks:75},
         {name:'Hindi',marks:67}
      ],
      
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
});

mainApp.controller("studentController1",function($scope,$http){
         var url="./src/module/data.txt";
         $http.get(url).success(function(response){
          $scope.students=response;
          
         });
       });