'use strict';

juke.controller('PlaylistCtrl', function($scope, $log){
  $scope.newPlaylistLog = function(){
    $log.log($scope.newPlaylistName);
  }
})
