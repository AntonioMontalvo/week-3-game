var attempts = 0;
var countName = 0;
var next = 0;
// window.onload = backgroundMusic();
/////////////////////////////////////////////////////////
//                      OBJECTS                        //
/////////////////////////////////////////////////////////

var artists = [
  {name:"Miles Davis",
   track: 'assets/music/miles.mp3',
   photo: 'assets/images/miles.jpeg'
  },
  {name:"Chick Corea",
  track: 'assets/music/chick.mp3',
  photo: 'assets/images/chick.jpeg'
  },
  {name:"Herbie Hancock",
  track: 'assets/music/herbie.mp3',
  photo: 'assets/images/herbie.jpeg'
  },
  {name:"Jaco Pastorius",
  track: 'assets/music/jaco.mp3',
  photo: 'assets/images/jaco.jpeg'
  },
  {name:"Stan Getz",
  track: 'assets/music/stan.mp3',
  photo: 'assets/images/stan.jpeg'
  },
  {name:"Chet Baker",
  track: 'assets/music/chet.mp3',
  photo: 'assets/images/chet.jpeg'
  },
  {name:"Dizzy Gillespie",
  track: 'assets/music/dizzy.mp3',
  photo: 'assets/images/dizzy.jpeg'
  },
  {name:"Art Blakey",
  track: 'assets/music/art.mp3',
  photo: 'assets/images/art.jpg'
  },
  {name:"Louis Armstrong",
  track: 'assets/music/louis.mp3',
  photo: 'assets/images/louis.jpeg'
  },
  {name:"John Coltrane",
  track: 'assets/music/john.mp3',
  photo: 'assets/images/john.jpeg'
  },
  {name:"Ella Fitzgerald",
  track: 'assets/music/ella.mp3',
  photo: 'assets/images/ella.jpeg'
  },
  {name:"Count Basie",
  track: 'assets/music/count.mp3',
  photo: 'assets/images/count.jpeg'
  },
  {name:"Sarah Vaughan",
  track: 'assets/music/sarah.mp3',
  photo: 'assets/images/sarah.jpeg'
  },
  {name:"Astrud Gilberto",
  track: 'assets/music/astrud.mp3',
  photo: 'assets/images/astrud.jpg'
  },
  {name:"Billie Holiday",
  track: 'assets/music/bille.mp3',
  photo: 'assets/images/billie.jpg'
  }
];

var guessArtist = {
  dashedName:[],
  userTypedLetter: [],
  matchedEmpty:[],
  displayDashes: function(){
    var targetP = document.getElementById("dashed-text");
  	targetP.innerHTML = this.dashedName;
  },

  displayTypedLetter: function(){
    var targetP = document.getElementById("typed-text");
  	targetP.innerHTML = this.userTypedLetter;

  },
  upDateDashText: function(){
    var k = this.matchedEmpty[next];
    this.dashedName[k] = " ";
    this.displayDashes();
  },
}
/////////////////////////////////////////////////////////
//                      FUNCTIONS                      //
//////////////////////////////////////////////////////
var audio = document.createElement('audio');
function playTrack(){
  audio.src = artists[countName].track;
  audio.play();
}
function pauseTrack(){
  audio.src = artists[countName].track;
  audio.pause();
}
function addPicture(){
  document.getElementById('artists-profile').src = artists[countName].photo;
}


function getArtist(){
  selected = artists[countName]['name'].toUpperCase();
  playTrack();
  convertName();
  guessArtist.upDateDashText();
}

function getArtistToArray(){
  nameToArray = artists[countName]['name'].toUpperCase();
  arrayedName = nameToArray.split("").toLocaleString();
  primitive = guessArtist.dashedName.toLocaleString();
}
function displayArtist(){
  var targetP = document.getElementById("artist");
  targetP.innerHTML = artists[countName]['name'];
}
function convertName(){//converts name to dash
  var str = selected;
  var guessThisOne = "_";
  var empty = " ";
  for (var i = 0; i < artists[countName]['name'].length; i++){
    if (str[i] === empty) {guessArtist.matchedEmpty.push(i);
    }
    guessArtist.dashedName.push(guessThisOne);
  }
}
function checkAttempts(){
  var guessArea = document.getElementById("looser");
  var winner = document.getElementById("winner");
  var targetH1 = document.getElementById("counter");
  targetH1.innerHTML = ("Number of attemps left: " + (30 - attempts));

    if( attempts === 30 || arrayedName == primitive ){
      addPicture();
      pauseTrack();
      guessArtist.upDateDashText();
      guessArtist.userTypedLetter = [];
      guessArtist.dashedName = [];
      attempts = 0;
      countName++;
    }
    if( attempts === 29){
      guessArea.innerHTML = "You know nothing about Jazz! Try another one.";
    }else{
      guessArea.innerHTML = "";
    }
    if(arrayedName == primitive){
      winner.innerHTML = "Alright, Alright, Alright!, Try another one.";
     }else{
      winner.innerHTML = "";
     }
  }


/////////////////////////////////////////////////////////
//                      ON-KEY-UP                      //
/////////////////////////////////////////////////////////
document.onkeyup = function(event) {
  // Determines which key was selected.
  var guessKey = String.fromCharCode(event.keyCode).toUpperCase();
  attempts++;
     if(countName === next){
       getArtist();
       next ++;
     }
    getArtistToArray();

    if(guessArtist.userTypedLetter.includes(guessKey) === false){
      guessArtist.userTypedLetter.push(guessKey);//stores letter
    }

    guessArtist.displayTypedLetter();//calls function

    function letterIndex() {// get and stores the matched letter index
        for(var i = 0; i < selected.length; i++) {
            if (selected[i] === guessKey)
            guessArtist.dashedName[i] = guessKey;
        }
    }
    letterIndex();
    checkAttempts();
    guessArtist.displayDashes();

  }
