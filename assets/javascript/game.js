//create an array for the artists
var artists = [
  {firstname:"Miles" ,
   lastname:"Davis"
  },
  {firstname:"Chick",
  lastname:"Corea"
  },
  {firstname:"Herbie",
  lastname:"Hancock"
  },
  {firstname:"Nina",
  lastname:"Simone"
  },
  {firstname:"Stan",
  lastname:"Getz"
  },
  {firstname:"Sarah",
  lastname:"Vaughan"
  },
  {firstname:"Louis",
  lastname:"Armstrong"
  },
  {firstname:"Duke",
  lastname:"Ellington"
  },
  {firstname:"John",
  lastname:"Coltrane"
  },
  {firstname:"Charlie",
  lastname:"Parker"
  }
];

//holds artists dashed values
var guessArtist = {
  firstname:[],
  lastname: [],
  userTypedLetter: [],
  display: function(){
    var targetP = document.getElementById("guess-text");
	 targetP.innerHTML = this.firstname + " " + this.lastname;
   console.log(this.firstname + " "+this.lastname);
  }
}

//access artists
function getArtist(){
  selected = artists[0].firstname.toUpperCase() + artists[0].lastname.toUpperCase();
  name1 = artists[0].firstname.toUpperCase();
  name2 = artists[0].lastname.toUpperCase();
}

//converts firstname to dash
function convertFirst(){
  var guessFirst = "_";
  for (var i = 0; i < artists[0].firstname.length; i++){
    guessArtist.firstname.push(guessFirst);
    console.log (guessFirst);
  }
}

// converts firstname to dash
function convertLast(){
  var guessLast = "_";
  for (var i = 0; i < artists[0].lastname.length; i++){
    guessArtist.lastname.push(guessLast);
    console.log (guessLast);
  }
}


// get user key input
document.onkeyup = function(event) {
	// Determines which exact key was selected. Make it Uppercase
	var guessKey = String.fromCharCode(event.keyCode).toUpperCase();
  // prints letter to screen
  document.getElementById("guess-text").innerHTML = guessKey;
  //push letter to guessArtist
  guessArtist.userTypedLetter.push(guessKey);
}


function searchLetter() {
    var str = selected;
    var n = str.search(guessArtist.userTypedLetter[0]);

    console.log (n);

}




// //replace artist name for dashes
// function replaceToDashes() {
//     var str = selected;
//     var result = str.replace("Miles Davis", "_ _ _");
//     console.log(result);
// }


//get the index for

// function findLetter(guessKey) {
//     var str = selected;
//     var found = str.indexOf(guessKey);
//     return found;
//     console.log(found);
// }



// function testSelected() {
//     var str = selected;
//     var pattern = new RegExp(" ");
//     var result = pattern.test(str);
//
//       if(result = true) {
//         console.log("I am a space");
//       } else {
//         console.lof("I am not a space!")
//       }
//     }
