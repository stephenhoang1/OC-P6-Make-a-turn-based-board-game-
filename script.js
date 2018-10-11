const Player1 = {
  name: "Chef Mathilde",
  avatar: "styles/img/chef_whitehat.jpg",
  health: 100,
  weapon: {
      image: '<img src="" alt="" class="weapon" id="default">',
      damage: 10,
      oldWeapon: ""
  },
  shield: false,
  position: {
    col: 0,
    row: 0
  }
};
const Player2 = {
  name: "Chef Jean",
  avatar: "styles/img/chef_blackhat.jpg",
  health: 100,
  weapon: {
      image: '<img src="" alt="" class="weapon" id="default">',
      damage: 10,
      oldWeapon: ""
  },
  shield: false,
  position: {
    col: 0,
    row: 0
  }
};

// create variables for columns and rows
var map_col = 0;
var map_row = 1;

// MAP MAKING STEP 1:
// generate divs and add them to a map id
// loop to 81
for(var i = 0; i < 81; i++) {
  // increment map_col
  map_col++;

  // To the map in HTML, attach a div
  // in the div, add a data-col with the number of the column and row.
  // keep incrementing the map_col as you make another div
  $("#map").append(`<div data-col="${map_col}" data-row="${map_row}"></div>`);

  // when the column gets to 9, bring it back down to 0
  // then increase the row by one
  // continue until the col reaches 9 again, and do the same.
  if(map_col === 9) {
    map_col = 0;
    map_row++;
  }
}

// create array of squares to create a coordinate system
// This will be useful when we create the function to move players around
// select all the divs in the map div and make them into an array
// also for randomly selecting squares, to generate players, obstacles and weapons from.
var gridSquares = $("#map>div").toArray();

function isCellOccupied(cell) {
  if(cell.innerHTML === '<div class="player"></div>'||
     cell.innerHTML === '<div class="weapon"></div>' ||
     cell.innerHTML === '<div class="obstacle"></div>')
  {
    return true;
  } else {
    return false;
  }
}

// ***  OBSTACLE ***
// create an obstacle
var obstacle = '<div class="obstacle"></div>'
// function to generate obstacle
function genObstacle() {

  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  while (isCellOccupied(randomSquare)) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }
    $(randomSquare).html(obstacle);

  // add a full class
   // $('.obstacle').addClass('full');

}

// ***  WEAPONS ***
var weapon = '<div class="weapon"></div>'
function genWeapon() {
  // choose an element at random from the gridSquares array
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while (isCellOccupied(randomSquare)) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }
  $(randomSquare).html(weapon)
}

// ***  PLAYERS ***
var player = '<div class="player"></div>'
function genPlayer() {
  // choose an element at random from the gridSquares array
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while (isCellOccupied(randomSquare)) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }

  $(randomSquare).html(player)
  // add a full class
  // $('.player').addClass('full');

}

$(function() {
  // start a new game
  $("#newGame").on("click", function() {
    $("#map>div").empty();

  $('#health1').val(Player1.health)

  $('#damage1').html(Player1.weapon.damage)

    // Generate obstacles
    for (var i = 0; i < 12; i++) {
      genObstacle();
    }

    // generate weapons
    for(var x = 0; x < 4; x++) {
      genWeapon();
    }

    // generate players
    for (var x = 0; x < 2; x++) {
      genPlayer();
    }

  });

  $('#gameRules').on('click', function() {
    console.log('Rules btn clicked...')
    $('#rulesModal').css('display', 'block')
  });
})


//healthbar
// let health = document.getElementById("health");
// $("#pain").on("click", function() {
//    health.value -= 10;
//  })
//
//
//    if (health.value == "0") {
//      $(".card-img-top").css("filter", "grayscale");
//    }


// gridSquares.forEach(function(sq) {
//   console.log("col:", $(sq).data("col"));
//   console.log("row:", $(sq).data("row"));
// })
