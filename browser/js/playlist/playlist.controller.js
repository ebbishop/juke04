'use strict';

juke.controller('PlaylistCtrl', function($scope, $log, PlaylistFactory){
  $scope.newPlaylistLog = function(){
    $log.log($scope.newPlaylistName);
  }

  $scope.newPlaylistCreate = function () {
    var newName = $scope.newPlaylistName;
    $scope.newPlaylistName = null;
    return PlaylistFactory.create({name: newName});
  }
})
