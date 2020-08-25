const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
  animalJSON.forEach(classify)
  console.log("dogs: ", dogs);
  console.log("cats: ", cats);
  function classify (item) {
    (item.species) === "dog" ?  dogs.push(item) : cats.push(item)

  //   if  (item.species === "dog") {
  //     dogs.push(item);
  //   } else if (item.species === "cat") {
  //     cats.push(item);
  //   }
  }

});


