function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs)

  }; //after get music by artist returns what are you doing with the objects?




  function drawSongs(songList) {
    var template = ''

    for (i = 0; i < songList.length; i++) {
      var song = songList[i];
      template +=
        `<div class="row panel">
        <div class="col-xs-8">
      <center>
        <h3 class="song-title-text">${song.title}</h3>
        <img class="albumArt" src="${song.albumArt}">
          <h4>Artist: ${song.artist}</h4>
            <p>Collection: ${song.collection}</p>
             <p> Price: ${song.price}</p>
             </div>
             <div class="sound-bar">
             <audio controls class="sound-bar"> <source src="${song.preview}" class="preview-bar" type="audio/mpeg"></audio>
             
             </center>
             </div>
             </div>`
    }
    document.getElementById("songs").innerHTML = template;
  }
  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

  //Start coding here






}