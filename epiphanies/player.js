/* Log out
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut()
  .then(() => {
    /// Redirect the user to the sign up page
    window.location.href = "signup.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    alert(errorMessage);
  });
}); */

// Tutorial followed: https://youtu.be/b89pR5L4qZc

function playerX(){

    var songTitle = document.querySelector(".songTitle");
    

    var audioSource = document.querySelector(".audioSource");
    
    // Volume
    var defaultVolume = 0.5;
    var volumeControl = document.querySelector(".volumeControl");
    volumeControl.value = defaultVolume;

    // Duration
    var durationControl = document.querySelector(".durationControl");
    durationControl.value = 0;

    var interval;
    var playlist;
    var totalSongs;

    var currentSong = 0;



    function initSong(e){
        var path = e.target.getAttribute("path");
        songTitle.innerHTML = path.split(/[\\/]/).pop();
        this.song(path);
        this.play();
    }

    this.song = function(path){
        audioSource.src = path;
        songTitle.innerHTML = path.split(/[\\/]/).pop();
    }
    this.init = function(){

        playlist = document.querySelector(".allSongs");

        if(playlist.children[0]){
            totalSongs = playlist.children.length;
        
            // Play song, when clicking it in the playlist
            playlist.addEventListener("click", initSong.bind(this));

            var path = playlist.children[currentSong].getAttribute("path");
            audioSource.src = path;
            songTitle.innerHTML = playlist.children[currentSong].innerHTML.split(/[\\/]/).pop();
        }

    }
    this.init();

    // Default player controls
    this.play = function(){
        audioSource.play();
        interval = setInterval(updateDuration, 20);
    }

    this.pause = function(){
        audioSource.pause();
        clearInterval(interval);
    }

    this.next = function(allSongs){
        if(!playlist)
        return;
        currentSong += 1;
        if(currentSong > (totalSongs - 1)){
            currentSong = 0;
        }
        
        this.init();
        this.play();
    }
    this.previous = function(){
        currentSong -= 1;
        if(!playlist)
        return;
        if(currentSong < 0){
            currentSong = (totalSongs - 1);
        }
        this.init();
        this.play();
    }

    this.volume = function(e){
        audioSource.volume = e.target.value;
    }

    this.duration = function(e){
        audioSource.currentTime = (e.target.value / 100) * audioSource.duration;
    }

    function updateDuration(){
        durationControl.value = audioSource.currentTime / audioSource.duration * 100;
    }
}

var player = new playerX();