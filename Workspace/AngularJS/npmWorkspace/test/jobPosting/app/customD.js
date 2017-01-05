angular.module('myApp').controller('dialogController', dialogController);
function dialogController ($scope, $mdDialog) 
{
  $scope.status = '';
    $scope.showCustom = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,
                  fullscreen: true,        
                  preserveScope: true,           
                  templateUrl: './jobDesc.html',
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
}