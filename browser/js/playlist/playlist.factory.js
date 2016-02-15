'use strict';

juke.factory('PlaylistFactory', function ($http, $log) {
  var PlaylistFactory = {};

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (newPlaylist) {
      $log.log("new playlist obj: ", newPlaylist);
      $log.log("new playlist data: ", newPlaylist.data);

      return newPlaylist.data;
    });
  };

  PlaylistFactory.getAll = function () {
    return $http.get('/api/playlists')
    .then(res => res.data);
  };

  return PlaylistFactory;
})