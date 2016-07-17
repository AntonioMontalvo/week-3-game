//Object stores an array artists-objects
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

//object stores artists dashed values and userTypedLetter
var guessArtist = {
  firstname:[],
  lastname: [],
  userTypedLetter: [],
  display: function(){
    var targetP = document.getElementById("dashed-text");
	 targetP.innerHTML = this.firstname + " " + this.lastname;
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


// get the index of the userTypedLetter in selected
// if not available returns -1
function searchLetter() {
var str = selected;
var indices = [];
var negative = "";
    for(var i = 0; i < str.length; i++) {
        if (str[i] === guessArtist.userTypedLetter[0])
        indices.push(i);}
        if (str[i] !== guessArtist.userTypedLetter[0])
        negative += "not found!"
      
        console.log(negative);
        console.log(indices);
    }


    // //splice
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    //
    // function myFunction() {
    //     fruits.splice(2, 0, "Lemon", "Kiwi");
    //     document.getElementById("demo").innerHTML = fruits;
    // }


// //replace artist name for dashes
// function replaceToDashes() {
//     var str = selected;
//     var result = str.replace("Miles Davis", "_ _ _");
//     console.log(result);
// }
