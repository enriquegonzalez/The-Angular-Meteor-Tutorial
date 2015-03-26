angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',
function($scope, $stateParams, $meteor){

  $scope.stateMessage = "save";
  $scope.party = $meteor.object(Parties, $stateParams.partyId, false);

  $scope.$watchGroup(['party.name', 'party.description'], function(newVal, oldVal) {
    if(!newVal) return;
    console.log(newVal, oldVal);
      return $scope.stateMessage = "save";
  });


   $scope.save = function() {
    $scope.party.save().then(function(numberOfDocs){
      $scope.stateMessage = "saved!";
      // console.log('save success doc affected ', numberOfDocs);
    }, function(error){
      $scope.stateMessage = "error";
      // console.log('save error', error);
    });
  };

  $scope.reset = function() {
    $scope.party.reset();
  }

}]);
