'use strict';

juke.config(function($stateProvider){

  $stateProvider.state('newPlaylist', {
    url:'/playlists/new' ,
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: 'NewPlaylistCtrl'
  })

  $stateProvider.state('onePlaylist', {
    url:'/playlists/:playlistId',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'OnePlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.getById($stateParams.playlistId);
      },
      allSongs: function (SongFactory) {
        return SongFactory.getAll();
      }
    }
  });
})
