function fetchArtists (event) {
  event.preventDefault()
  var request = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $("#artist").val());
    
  function handleArtists (artists) {
    console.log(artists);
    artists.artists.items.forEach(function showArtists(artist_searched){
      console.log(artist_searched.name);
      var name_image = '<li><h3>'+ artist_searched.name + '<h3><li><img src ="' + artist_searched.images[0].url + '">';
      $('#showroom').append(name_image);
    })

  }

  function handleError (err) {
    console.error('OH NO!!', err);
  }

  request.done(handleArtists);
  request.fail(handleError);
}

$('#js-submit').on('click', fetchArtists);