var movies = [
  {
    name: "Top Gun",
    rating: 4,
    hasWatched: true,
  },
  {
    name: "Remember the Titans",
    rating: 5,
    hasWatched: true,
  },
  {
    name: "Frozen",
    rating: 2.5,
    hasWatched: false,
  }
]

for(i=0; i<movies.length; i++) {
  if(movies[i].hasWatched){
    var watch = "watched";
  } else {
    var watch = "not seen";
  }
  console.log("You have " + watch + " \"" + movies[i].name + "\" - " + movies[i].rating + " stars")
}
