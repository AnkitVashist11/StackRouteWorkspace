angular.module("myApp", [])
  .component("jobDesComponent",{
      templateUrl: './jobDesForm.html',
      bindings: { name: '=',
                   txt: '@'      
                },
       controller: function(){
        this.myName = 'Alain';
        this.obj = [{
        name: "Alfreds Futterkiste",
        city: "Berlin",
        Country: "Germany"
      }, {
        name: "Ana Trujillo Emparedados y helados",
        city: "México D.F.",
        country: "Mexico"
      }, {
        name: "Blondel père et fils",
        city: "Strasbourg",
        country: "France"
      }, {
        name: "Bólido Comidas preparadas",
        city: "Madrid",
        country: "Spain"
      }];
      }
  });