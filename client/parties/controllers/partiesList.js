angular.module("socially").controller("PartiesListCtrl", ['$scope', '$meteor',
  function($scope, $meteor){

    $scope.parties = $meteor.collection(Parties).subscribe('parties');

    $scope.isOwner = function(user, party){
      if (user) {
        console.log(user, party.owner, user._id === party.owner);
        return user._id === party.owner;
      }
    };

    $scope.remove = function(party){
      $scope.parties.splice( $scope.parties.indexOf(party), 1 );
    };

    $scope.removeAll = function(){
      $scope.parties.remove();
    };

 }]);
