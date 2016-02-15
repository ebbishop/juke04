'use strict';

juke.factory('PlaylistFactory', function ($http, $log, SongFactory, $q) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.getAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.getById = function (playlistId) {
    console.log("trying to get by Id...");
    var url = '/api/playlists/' + playlistId;
    return $q.all([$http.get(url), $http.get(url + '/songs')])
    .then(responses => responses.map(res => res.data))
    .then(results => {
      console.log("results: ", results);
      var playlist = results[0];
      var songs = results[1].map(SongFactory.convert);
      playlist.songs = songs;
      return playlist;
    })
    .catch($log.error);
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (newPlaylist) {
      $log.log("new playlist obj: ", newPlaylist);
      $log.log("new playlist data: ", newPlaylist.data);

      var playlist = newPlaylist.data;
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  return PlaylistFactory;
})