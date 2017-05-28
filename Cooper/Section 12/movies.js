var movies = [
    {
      name: "In Bruges",
      haveSeen: true,
      rating: 5
    },
    {
      name: "Frozen",
      haveSeen: false,
      rating: 4.5
    },
    {
      name: "Mad Max Fury Road",
      haveSeen: true,
      rating: 5
    },
    {
      name: "Les Miserables",
      haveSeen: false,
      rating: 3.5
    }
  ]

movies.forEach(function(movie){
  if(movie.haveSeen === true) {
    console.log("You have seen " + "\"" + movie.name + "\" - " + movie.rating + " stars");
  } else {
    console.log("You have not seen " + "\"" + movie.name + "\" - " + movie.rating + " stars");
  }
});
