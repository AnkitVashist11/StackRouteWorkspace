
var value = {
  "Search": [
    {
      "Title": "need",
      "role": "Front-End-Developer",
      "duties":"has to work for ui for websites project",
      "skills":[{
          "name":"angular",
          "expertise":"expert"
                },
                {
           "name":"react",
           "expertise":"beginner"
              }],
      "location":"Gurugram gdsfsjffjf",
      "language":"english"
    },
    {

      "Title": "need",
      "role": "Front-End-Developer",
      "duties":"has to work for ui for websites project",
      "skills":[{
          "name":"angular",
          "expertise":"expert"
                },
                {
           "name":"react",
           "expertise":"beginner"
              }],
      "location":"Gurugram",
      "language":"english",

    }]
  }

  var app=angular.module("mainApp",[]);
  app.controller('contrl',function($scope){
    $scope.contrl=value.Search;
  });
