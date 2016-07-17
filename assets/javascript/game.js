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
  display: function(){
    console.log(this.firstname + " "+this.lastname);
  }
}

//access artists
function getArtist(){
  console.log(artists[0].firstname +"   "+ artists[0].lastname);
  selected = artists[0].firstname + artists[0].lastname;
  return selected.toUpperCase();
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

//replace artist name for dashes
function replaceToDashes() {
    var str = selected;
    var result = str.replace("Miles Davis", "_ _ _");
    console.log(result);
}



// //get the index for the space in between words
// function findSpace() {
//     var str = selected;
//     var found = str.indexOf(" ");
//     return found;
//     // console.log(found);
// }


//matches letters
// function matchLetter(){
//     var str = selected;
//     var res = str.match(/" "/gi);
//
//     console.log(res);
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
