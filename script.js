// ***  PLAYER 1 ***
const Player1 = {
  name: "Chef Mathilde",
  avatar: "styles/img/chef_whitehat.jpg",
  health: 100,
  weapon: {
      name: "Knife and Fork",
      image: '<img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default">',
      damage: 10,
      oldWeapon: ""
  },
  shield: false,
  position: {
    col: 0,
    row: 0
  }
};
// ***  PLAYER 2 ***
const Player2 = {
  name: "Chef Jean",
  avatar: "styles/img/chef_blackhat.jpg",
  health: 100,
  weapon: {
      name: "Knife and Fork",
      image: '<img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default">',
      damage: 10,
      oldWeapon: ""
  },
  shield: false,
  position: {
    col: 0,
    row: 0
  }
};
// ***  WEAPONS ***
const Weapons = {
  ladle: {
    name: "Ladle",
    image: '<img src="styles/img/ladle.png" alt="Ladle" class="weapon" id="default">',
    damage: 20
  },
  doughRoller: {
    name: "Dough Roller",
    image: '<img src="styles/img/dough-roller.png" alt="Dough Roller" class="weapon" id="default">',
    damage: 40
  },
  cookingPot: {
    name: "Cooking Pot",
    image: '<img src="styles/img/cooking-pot.png" alt="Cooking Pot" class="weapon" id="default">',
    damage: 60
  },
  meatCleaver: {
    name: "Meat Cleaver",
    image: '<img src="styles/img/meat-cleaver.png" alt="Meat Cleaver" class="weapon" id="default">',
    damage: 80
  },
}

// ***  OBSTACLE ***
const Obstacle = {
  image: '<img src="styles/img/gas_cooker_obstacle.png" alt="obstacle" class="obstacle">'
}

// ***  GENERATE GRID ***
  // create variables for columns and rows
  var map_col = 0;
  var map_row = 1;

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


// ***  CHECK IF CELL IS OCCUPIED ***
function isCellOccupied(cell) {
  if(cell.innerHTML === '<div class="player"></div>'||
     cell.innerHTML === '<div class="weapon"></div>' ||
     cell.innerHTML === '<div class="obstacle"></div>') //***REPLACE WITH CORRECT ELEMENT LATER ON***
  {
    return true;
  } else {
    return false;
  }
}

// ***  GENERATE OBSTACLE ***
var obstacle = '<div class="obstacle"></div>'
function genObstacle() {

  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  while (isCellOccupied(randomSquare)) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }
    $(randomSquare).html(obstacle);

}

// ***  GENERATE WEAPONS ***
var weapon = '<div class="weapon"></div>'
function genWeapon() {

  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  var weaponsArray = Object.values(Weapons)

  for (var x = 0; x < weaponsArray.length + 1; x++) {

  while (isCellOccupied(randomSquare)) {
    selectedNumber = Math.floor(Math.random() * gridSquares.length);
    randomSquare = gridSquares[selectedNumber];
  }

  selectedNumber = Math.floor(Math.random() * gridSquares.length);
  randomSquare = gridSquares[selectedNumber];

  $(randomSquare).html(weaponsArray[x].image)
  console.log(weaponsArray[x].image)
  }
}


// ***  GENERATE PLAYERS ***
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


// ******************************************************



// ***  START A NEW GAME ***
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

    genWeapon();



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
