var movies = [
"Tales from Crypt: Demon Knight",
"Sleepaway Camp",
"Trick R Treat", 
"Dracula",
"Halloween",
"Halloween 2",
"Halloween III: Season of the Witch",
"Friday the 13th (1980)",
"Friday the 13th Part 2",
"Friday the 13th Part III",
"Friday the 13th: The Final Chapter",
"Friday the 13th: A New Beginning",
"Friday the 13th Part VI: Jason Lives",
"Friday the 13th Part VII: The New Blood",
"Friday the 13th Part VIII: Jason Takes Manhattan",
"Jason Goes to Hell: The Final Friday",
"Jason X",
"Freddy vs. Jason",
"Friday the 13th (2009)",
"A Nightmare on Elm Street (1984)",
"A Nightmare on Elm Street 2: Freddy's Revenge",
"A Nightmare on Elm Street 3: Dream Warriors",
"A Nightmare on Elm Street 4: The Dream Master",
"A Nightmare on Elm Street 5: The Dream Child",
"Freddy's Dead: The Final Nightmare",
"Wes Craven's New Nightmare",
"A Nightmare on Elm Street (2010)",
"Halloween 4: The Return of Michael Myers",
"Halloween 5: The Revenge of Michael Myers",
"Halloween: The Curse of Michael Myers",
"Halloween H20: 20 Years Later",
"Halloween: Resurrection",
"Halloween (2007)",
"Halloween II (2009)",
"Halloween (2018)"
];

for(var j = 0; j < movies.length; j++){
  $("#allMovies").append((movies[j]) + " // ");  
}

var i = Math.floor(Math.random() * movies.length);
console.log(i);
var choice = movies[i];
$("#title").text(choice);

console.log(choice);

$(".btn").click(function(){
    var i = Math.floor(Math.random() * movies.length);
    console.log(i);
    var choice = movies[i];
    $("#title").text(choice);
});