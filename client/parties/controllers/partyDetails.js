angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',
function($scope, $stateParams, $meteor){


  $scope.saveState = "save";
  $scope.party = $meteor.object(Parties, $stateParams.partyId, false).subscribe('parties');
  $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

  $scope.$watchGroup(['party.name', 'party.description'], function(newVal, oldVal) {
    if(!newVal) return;
    console.log(newVal, oldVal);
      return $scope.saveState = "save";
  });


   $scope.save = function() {
    $scope.party.save().then(function(numberOfDocs){
      $scope.saveState = "saved!";
      // console.log('save success doc affected ', numberOfDocs);
    }, function(error){
      $scope.saveState = "error";
      console.log('save error', error);
    });
  };

  $scope.reset = function() {
    $scope.party.reset();
  }

}]);
