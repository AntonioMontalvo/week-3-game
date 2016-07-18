//Object stores an array artists-objects
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

//object stores artists dashed values and userTypedLetter
var guessArtist = {
  dashedName:[],
  userTypedLetter: [],
  matches:[],
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
  },
  // upGuessText: function(){
  //
  // }
}

//access artists
function getArtist(){
  selected = artists[0]['name'].toUpperCase();
  convertName();
  guessArtist.upDateDashText();
}

function displayArtist(){
  var targetP = document.getElementById("artist");
  targetP.innerHTML = artists[0]['name'];
}
//converts name to dash
function convertName(){
  var str = selected;
  var guessThisOne = "_";
  var empty = " ";
  for (var i = 0; i < artists[0]['name'].length; i++){
    if (str[i] === empty) {guessArtist.matchedEmpty.push(i);
    }
    guessArtist.dashedName.push(guessThisOne);
    console.log (guessThisOne);
  }
}

// get user key input
document.onkeyup = function(event) {
	// Determines which exact key was selected. Make it Uppercase
	var guessKey = String.fromCharCode(event.keyCode).toUpperCase();
  //push letter to guessArtist
  guessArtist.userTypedLetter.push(guessKey);
  guessArtist.displayTypedLetter();
}


// get the index of the userTypedLetter in selected
function searchLetter() {
var str = selected;
    for(var i = 0; i < str.length; i++) {
        if (str[i] === guessArtist.userTypedLetter[0])
        guessArtist.matches.push(i);
    }
}


// //replace artist name for dashes
// function replaceToDashes() {
//     var str = selected;
//     var result = str.replace("Miles Davis", "_ _ _");
//     console.log(result);
// }
