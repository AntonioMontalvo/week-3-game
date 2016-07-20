 var attempts = 0;
var countName = 0;
var next = 0;
/////////////////////////////////////////////////////////
//                      OBJECTS                        //
/////////////////////////////////////////////////////////

var artists = [
  {name:"Miles Davis"
  },
  {name:"Chick Corea"
  },
  {name:"Herbie Hancock"
  },
  {name:"Nina Simone"
  },
  {name:"Stan Getz"
  },
  {name:"Sarah Vaughan"
  },
  {name:"Louis Armstrong"
  },
  {name:"Duke Ellington"
  },
  {name:"John Coltrane"
  },
  {name:"Charlie Parker"
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
/////////////////////////////////////////////////////////

function getArtist(){
  selected = artists[countName]['name'].toUpperCase();
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
