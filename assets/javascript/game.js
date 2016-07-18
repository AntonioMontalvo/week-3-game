/////////////////////////////////////////////////////////
//                      OBJECTS                        //
/////////////////////////////////////////////////////////


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
    console.log (guessThisOne);
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
            // guessArtist.matches.push(i);
            guessArtist.dashedName[i] = guessKey;
        }

        console.log( guessKey + " is a matching letter");
    }
      letterIndex();
      guessArtist.displayDashes();

    // //////this 2 functions together find if a letter is in the artist/////
    // function artistHasLetter(artist, letter){
    //   return artist.indexOf(letter) >= 0;//because if indexOf -1 there is no match
    // }
    // function getArtistLetterToScreen(letter){
    //   if(artistHasLetter(selected, guessKey)){
    //
    //     // guessArtist.displayDashes();
    //     console.log( guessKey + " is a matching letter");
    //   } else {
    //     console.log( guessKey + " is not the matching letter");
    //   }
    // }
    //   getArtistLetterToScreen(guessKey);




}





// //replace artist name for dashes
// function replaceToDashes() {
//     var str = selected;
//     var result = str.replace("Miles Davis", "_ _ _");
//     console.log(result);
// }
