// Joan of Arc "properties".
var joanOfArcInfoParts = ["Real Name", "Grew Up Where", "Known For", "Scars", "Symbolism"];

// Values for Joan's "properties".
var joanOfArcInfoValues = [
  "Jehanne la Pucelle.",
  "Domremy, a village in northeastern France.",
  "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
  "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
  "Stands for French unity and nationalism."
];

function connect (arr1, arr2) {
  
  for (var i=0; i<5; i++) {
    console.log(joanOfArcInfoParts[i]+": "+joanOfArcInfoValues)
  }
}

connect(joanOfArcInfoParts, joanOfArcInfoValues);