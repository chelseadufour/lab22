var lyric = '';

$.get('/api/lyrics', function(data){
  lyrics = data;
  console.log(lyrics);

});
