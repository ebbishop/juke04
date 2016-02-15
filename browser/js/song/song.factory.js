'use strict';

juke.factory('SongFactory', function ($http) {

  var SongFactory = {};

  SongFactory.convert = function (song) {
    song.audioUrl = '/api/songs/' + song._id + '.audio';
    return song;
  };

  SongFactory.getAll = function () {
    return $http.get('/api/songs')
    .then(res => res.data);
  };

  return SongFactory;

});
