'use strict';

juke.controller('NewPlaylistCtrl', function($scope, $log, PlaylistFactory, $state){
  console.log("Now loading the Playlist Controller...");

  $scope.newPlaylistLog = function(){
    $log.log($scope.newPlaylistName);
  };

  $scope.newPlaylistCreate = function () {
    var newName = $scope.newPlaylistName;
    $scope.newPlaylistName = null;
    return PlaylistFactory.create({name: newName})
    .then(function (playlist) {
      $state.go('onePlaylist', {playlistId: playlist._id});
    });
  }
})

juke.controller('OnePlaylistCtrl', function($scope, $log, PlaylistFactory, thePlaylist, allSongs){
  console.log("Now loading the One Playlist Controller...");
  $scope.playlist = thePlaylist;

  $scope.songs = allSongs;

})
