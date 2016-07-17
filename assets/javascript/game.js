//create an array for the artists
var artists = [
  {firstname:"Miles" ,
   lastname:"Davis"
  },
  {firstname:"Chick Corea",
  lastname:"Davis"
  },
  {firstname:"Herbie Hancock",
  lastname:"Davis"
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

var guessArtist = {
  dashes:[],
}

//access artists
function getArtist(){
  console.log(artists[0].firstname + " "+ artists[0].lastname);
  selected = artists[0].firstname + " "+ artists[0].lastname;
  return selected.toUpperCase();
}

function convertArtist(){
  var dashSpace = "_ ";
  for (var i = 0; i < selected.length; i++){
    console.log(dashSpace);
  }
 console.log(selected);
}


//get the index for the space in between words
function findSpace() {
    var str = selected;
    var found = str.indexOf(" ");
    console.log(found);
}



//replace artist name for dashes
function replaceToDashes() {
    var str = selected;
    var result = str.replace("Miles Davis", "_ _ _");
    console.log(result);
}


//matches letters
function matchLetter(){
    var str = "Miles Davis";
    var res = str.match(/i/gi);
    document.getElementById("demo").innerHTML = res;
}











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
