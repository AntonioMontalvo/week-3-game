/////////////////////////////////////////////////////////
//                      OBJECTS                        //
/////////////////////////////////////////////////////////
var attemps = 0;

var artists = [
  {name:"Miles Davis"
  },
  {name:"ChickCorea"
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
    var k = this.matchedEmpty[0];
    this.dashedName[k] = " ";
    this.displayDashes();
  }
}
/////////////////////////////////////////////////////////
//                      FUNCTIONS                      //
/////////////////////////////////////////////////////////

function getArtist(){
  selected = artists[0]['name'].toUpperCase();
  convertName();
  guessArtist.upDateDashText();
}

function displayArtist(){
  var targetP = document.getElementById("artist");
  targetP.innerHTML = artists[0]['name'];
}

function convertName(){//converts name to dash
  var str = selected;
  var guessThisOne = "_";
  var empty = " ";
  for (var i = 0; i < artists[0]['name'].length; i++){
    if (str[i] === empty) {guessArtist.matchedEmpty.push(i);
    }
    guessArtist.dashedName.push(guessThisOne);
  }
}

function checkAttempts(){
  var targetH1 = document.getElementById("counter");
  targetH1.innerHTML = ("Number of attemps left: " + (10 - attemps));

    if(attemps === 10 ){
      var guessArea = document.getElementById("dashed-text");
      guessArea.innerHTML = "You know nothing about Jazz!";
      console.log("Ten Attempts");
    }
  }
/////////////////////////////////////////////////////////
//                      ON-KEY-UP                      //
/////////////////////////////////////////////////////////
document.onkeyup = function(event) {
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
      attemps++;
      letterIndex();
      guessArtist.displayDashes();
      checkAttempts();
  }
