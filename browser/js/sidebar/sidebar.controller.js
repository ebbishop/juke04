'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {
  // nothing to see here for now… state transitions happening with ui-sref!

  PlaylistFactory.getAll()
  .then(function (allPlaylists) {
    $scope.playlists = allPlaylists;
  });

});

    // resolve: {
    //   allArtists: function (ArtistFactory) {
    //     return ArtistFactory.fetchAll();
    //   }