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
    image: '<img src="styles/img/ladle.png" alt="Ladle" class="weapon" id="weaponLadle">',
    damage: 20
  },
  doughRoller: {
    name: "Dough Roller",
    image: '<img src="styles/img/dough-roller.png" alt="Dough Roller" class="weapon" id="weaponDoughRoller">',
    damage: 40
  },
  cookingPot: {
    name: "Cooking Pot",
    image: '<img src="styles/img/cooking-pot.png" alt="Cooking Pot" class="weapon" id="weaponCookingPot">',
    damage: 60
  },
  meatCleaver: {
    name: "Meat Cleaver",
    image: '<img src="styles/img/meat-cleaver.png" alt="Meat Cleaver" class="weapon" id="weaponMeatCleaver">',
    damage: 80
  },
}
// ***  OBSTACLE ***
const Obstacle = {
  image: '<img src="styles/img/gas_cooker_obstacle.png" alt="obstacle" class="obstacle">'
}
// ***  PLAYER MOVEMENT ***
const playerMovement = {
  north: {},
  south: {},
  east: {},
  west: {},
  showMovesPlayer1: {},
  showMovesPlayer2: {},
  movePlayer: function() {}
}
// ***  GAME TURNS ***
const gameTurn = {
  detectTurn: {},
  detechBattle: {},
  shieldStatus: {},
  changeTurn: {}
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


//XY system
// north - data-row - 1
// south - data-row + 1
// east  - data-col + 1
// west  - data-col - 1

//Array system:
// north - currentIndex - 9
// south - currentIndex + 9
// east  - currentIndex + 1
// west  - currentIndex - 1

// ***  CHECK IF CELL IS OCCUPIED ***
function isCellOccupied(cell) {
  if(cell.innerHTML === '<div class="obstacle"></div>' ||
     $(cell).hasClass("weapon")   ||
     $(cell).hasClass("player1")  ||
     $(cell).hasClass("player2")   )
  {
    return true;
  } else {
    return false;
  }
}
// cell.innerHTML === '<div class="obstacle"></div>'
// cell.innerHTML === '<div class="weapon"></div>' ||
// cell.innerHTML === '<div class="player"></div>'

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

    console.log(randomSquare)

}

// ***  GENERATE WEAPONS ***
function genWeapon() {

  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  var weaponsArray = Object.values(Weapons)

  for (var x = 0; x < weaponsArray.length; x++) {

  while (isCellOccupied(randomSquare)) {
    selectedNumber = Math.floor(Math.random() * gridSquares.length);
    randomSquare = gridSquares[selectedNumber];
  }

  selectedNumber = Math.floor(Math.random() * gridSquares.length);
  randomSquare = gridSquares[selectedNumber];

  $(randomSquare).html('<div class="weapon">' + weaponsArray[x].image + '</div>')

  }
}

// ***  GENERATE PLAYER 1 ***
var player1 = '<div class="player1"></div>'
function genPlayer1() {
  // choose an element at random from the gridSquares array
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while (isCellOccupied(randomSquare)) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }

  selectedNumber = Math.floor(Math.random() * gridSquares.length);
  randomSquare = gridSquares[selectedNumber];

  $(randomSquare).html(player1)
  Player1.position.col = randomSquare.dataset.col
  Player1.position.row = randomSquare.dataset.row
}

// ***  GENERATE PLAYER 2 ***
var player2 = '<div class="player2"></div>'
function genPlayer2() {
  // choose an element at random from the gridSquares array
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while (isCellOccupied(randomSquare)) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }

  selectedNumber = Math.floor(Math.random() * gridSquares.length);
  randomSquare = gridSquares[selectedNumber];

  $(randomSquare).html(player2)
  Player2.position.col = randomSquare.dataset.col
  Player2.position.row = randomSquare.dataset.row
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
    for (var i = 0; i < 81; i++) {
      genObstacle();
          // genWeapon();

    }

    // genPlayer1()
    // genPlayer2()

    // generate weapons

    // generate players


  });

  });
