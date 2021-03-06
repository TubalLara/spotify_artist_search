function fetchArtists (event) {
  event.preventDefault()
  var request = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $("#artist").val());
    
  function handleArtists (artists) {
    console.log(artists);
    artists.artists.items.forEach(function showArtists(artist_searched){
      console.log(artist_searched.name);
      var name_image = '<li><h3>'+ '<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">'
  + artist_searched.name + '</button><h3><li><img src ="' + artist_searched.images[0].url + '">';
      $('#showroom').append(name_image);
    })
  }

  function handleError (err) {
    console.error('OH NO!!', err);
  }

  request.done(handleArtists);
  request.fail(handleError);
}

function fetchAlbums (event) {
  event.preventDefault()
  var request = $.get('https://api.spotify.com/v1/search?q=' + $(".btn-primary").text() + '&type=album');
    
  function handleAlbums (albums) {
    console.log(albums);
    albums.albums.items.forEach(function showAlbums(albums_searched){
      console.log(albums_searched.name);
      var name_image = '<li><h3>' + albums_searched.name + '<h3><li><img height="64" width="64" src ="' + albums_searched.images[0].url + '">';
      $('.modal-body').append(name_image);
    })
    $('.modal-title').append($(".btn-primary").text());
  }

  function handleAlbumError (err) {
    console.error('OH NO!!', err);
  }
  request.done(handleAlbums);
  request.fail(handleAlbumError);
}

$('#js-submit').on('click', fetchArtists);
$('#myModal').on('shown.bs.modal', fetchAlbums);