angular.module("myApp")
  .component("skillCard",{
      templateUrl: './skill.html',
      bindings: { name: '=',
                   txt: '@'      
                },
       controller: function(){
        this.myName = 'Alain';
        this.skill = ["angular","mongo","react"];
      }
  })