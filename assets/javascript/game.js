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
  {tname:"Nina Simone"
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
  }
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
  var targetH1 = document.getElementById("counter");
  targetH1.innerHTML = ("Number of attemps left: " + (30 - attempts));

    if( attempts === 30 ){
      var guessArea = document.getElementById("dashed-text");
      guessArea.innerHTML = "You know nothing about Jazz!";
      console.log("Ten Attempts");
      attempts = 0;
    }
  }
/////////////////////////////////////////////////////////
//                      ON-KEY-UP                      //
/////////////////////////////////////////////////////////
document.onkeyup = function(event) {
     getArtistToArray();
     if( countName === next ){
       getArtist();
       next ++;
     }
     if ( attempts == 29 ){
       guessArtist.dashedName = [];
       countName++;
     }
     if(arrayedName == primitive){
       
       console.log("hello!");
     }

  	// Determines which key was selected.
  	var guessKey = String.fromCharCode(event.keyCode).toUpperCase();

    guessArtist.userTypedLetter.push(guessKey);//stores letter

    guessArtist.displayTypedLetter();//calls function


    function letterIndex() {// get and stores the matched letter index
        for(var i = 0; i < selected.length; i++) {
            if (selected[i] === guessKey)
            guessArtist.dashedName[i] = guessKey;
        }
    }
      attempts++;
      letterIndex();
      guessArtist.displayDashes();
      checkAttempts();
  }
