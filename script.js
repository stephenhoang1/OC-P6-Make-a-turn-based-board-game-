var obstacle = '<div class="obstacle"></div>'

var map_col = 0;
var map_row = 1;

//generate grid
for(var i = 0; i < 81; i++) {
  map_col++;

  $("#map").append(`<div data-col="${map_col}" data-row="${map_row}"></div>`);

  if(map_col === 9) {
    map_col = 0;
    map_row++;
  }
}

var gridSquares = $("#map>div").toArray();

function genObstacle() {
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];
  //$(`[data-row="${$(randomSquare).data("row") + 1}"]`)
  $(randomSquare).html(obstacle)
  console.log(randomSquare);

}

$("#newGame").on("click", function() {
  $("#map>div").empty();

  for(var i = 0; i < 15; i++) {
    genObstacle();
  }
})

//HEALTH
let health = document.getElementById("health");

$("#pain").on("click", function() {
   health.value -= 10;
 })


   if (health.value == "0") {
     $(".card-img-top").css("filter", "grayscale");
   }




// gridSquares.forEach(function(sq) {
//   console.log("col:", $(sq).data("col"));
//   console.log("row:", $(sq).data("row"));
// })
